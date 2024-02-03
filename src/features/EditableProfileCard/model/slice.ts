import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { Profile } from '@/entities/Profile';
import type { EditableProfileCardSchema } from '@/features/EditableProfileCard/model/types';
import { getProfile } from '../api/getProfile';
import { updateProfile } from '../api/updateProfile';

const initialState: EditableProfileCardSchema = {
    isLoading: false,
    isReadonly: true,
};

const editableProfileCardSlice = createSlice({
    name: 'editableProfileCard',
    initialState,
    reducers: {
        setReadonly: (state, { payload }: PayloadAction<boolean>) => {
            state.isReadonly = payload;
        },
        updateProfile: (state, { payload }: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...payload,
            };
        },
        cancelEdit: (state) => {
            state.isReadonly = true;
            state.form = state.data;
            state.errorMessage = undefined;
            state.validationErrors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProfile.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.isReadonly = true;
                state.data = undefined;
                state.form = undefined;
                state.errorMessage = payload;
            })
            .addCase(updateProfile.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.isReadonly = false;

                if (typeof payload === 'string') {
                    state.errorMessage = payload;
                }
                if (Array.isArray(payload)) {
                    state.validationErrors = payload;
                }
            })
            .addMatcher(
                (action) => action.type.endsWith?.('/pending'),
                (state) => {
                    state.isLoading = true;
                    state.isReadonly = true;
                    state.errorMessage = undefined;
                    state.validationErrors = undefined;
                },
            )
            .addMatcher(
                (action) => action.type.endsWith?.('/fulfilled'),
                (state, { payload }: PayloadAction<Profile>) => {
                    state.isLoading = false;
                    state.data = payload;
                    state.form = payload;
                    state.errorMessage = undefined;
                    state.validationErrors = undefined;
                },
            );
    },
});

export const { actions: editableProfileCardActions, reducer: editableProfileCardReducer } =
    editableProfileCardSlice;

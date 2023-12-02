import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from '@/entities/Profile';
import { getProfile } from '../services/getProfile';
import { updateProfile } from '../services/updateProfile';
import { EditableProfileCardSchema } from '../types/editableProfileCard';

const initialState: EditableProfileCardSchema = {
    isLoading: false,
    isReadonly: true,
};

const editableProfileCard = createSlice({
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

            if (state.errorMessage) {
                state.errorMessage = undefined;
            }
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
                state.errorMessage = payload;
            })
            .addMatcher(
                (action) => action.type.endsWith?.('/pending'),
                (state) => {
                    state.isLoading = true;
                    state.isReadonly = true;
                    state.errorMessage = undefined;
                },
            )
            .addMatcher(
                (action) => action.type.endsWith?.('/fulfilled'),
                (state, { payload }: PayloadAction<Profile>) => {
                    state.isLoading = false;
                    state.data = payload;
                    state.form = payload;
                    state.errorMessage = undefined;
                },
            );
    },
});

export const { actions: editableProfileCardActions, reducer: editableProfileCardReducer } =
    editableProfileCard;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from '@/entities/Profile';
import { ProfileCardSchema } from '../types/profileCard';

const initialState: ProfileCardSchema = {
    isLoading: false,
    isReadonly: true,
};

const profileCard = createSlice({
    name: 'profileCard',
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
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                (action) => action.type.endsWith('/pending'),
                (state) => {
                    state.isLoading = true;
                    state.isReadonly = true;
                    state.errorMessage = undefined;
                },
            )
            .addMatcher(
                (action) => action.type.endsWith('/fulfilled'),
                (state, { payload }: PayloadAction<Profile>) => {
                    state.isLoading = false;
                    state.data = payload;
                    state.form = payload;
                    state.errorMessage = undefined;
                },
            )
            .addMatcher(
                (action) => action.type.endsWith('/rejected'),
                (state, { payload }) => {
                    state.isLoading = false;
                    state.isReadonly = true;
                    state.data = undefined;
                    state.form = undefined;
                    state.errorMessage = payload;
                },
            );
    },
});

export const { actions: profileCardActions, reducer: profileCardReducer } = profileCard;

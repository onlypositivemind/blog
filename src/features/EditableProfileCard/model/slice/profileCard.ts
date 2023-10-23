import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from '@/entities/Profile';
import { getProfileData } from '../services/getProfileData';
import { ProfileCardSchema } from '../types/profileCard';

const initialState: ProfileCardSchema = {
    isLoading: false,
    isReadonly: true,
};

const profileCard = createSlice({
    name: 'profileCard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProfileData.pending, (state) => {
                state.isLoading = true;
                state.isReadonly = true;
                state.errorMessage = undefined;
                state.data = undefined;
            })
            .addCase(getProfileData.fulfilled, (state, { payload }: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.isReadonly = true;
                state.data = payload;
                state.errorMessage = undefined;
            })
            .addCase(getProfileData.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.isReadonly = true;
                state.errorMessage = payload;
                state.data = undefined;
            });
    },
});

export const { actions: profileCardActions, reducer: profileCardReducer } = profileCard;

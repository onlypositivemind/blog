import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
    isEditing: false,
    isLoading: false,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;

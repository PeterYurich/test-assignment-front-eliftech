import { createSlice } from '@reduxjs/toolkit';
import { getShops } from './shopsOperations';

const initialState = {
    items: [],
    isLoading: false,
    error: null
}

export const shopsSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getShops.pending, state => {
                state.isLoading = true;
            })
            .addCase(getShops.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.items = payload;
                state.error = payload;
            })
            .addCase(getShops.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
    },
});
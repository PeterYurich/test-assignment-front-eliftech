import { createSlice } from '@reduxjs/toolkit';
import { getOrdersHistory } from './historyOperations';

const initialState = {
    items: [],
    isLoading: false,
    error: null
}

export const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getOrdersHistory.pending, state => {
                state.isLoading = true;
            })
            .addCase(getOrdersHistory.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.items = payload;
                state.error = payload;
            })
            .addCase(getOrdersHistory.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
    },
});
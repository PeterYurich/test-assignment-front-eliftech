import { createSlice } from '@reduxjs/toolkit';
import { getGoods } from './goodsOperations';

const initialState = {
    items: [],
    isLoading: false,
    error: null
}

export const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getGoods.pending, state => {
                state.isLoading = true;
            })
            .addCase(getGoods.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.items = payload
            })
            .addCase(getGoods.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
    },
});
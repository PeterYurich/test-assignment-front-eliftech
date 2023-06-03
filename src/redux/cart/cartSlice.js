import { createSlice } from '@reduxjs/toolkit';
import { addOrder } from './cartOperations';

const initialState = {
    items: [],
    isLoading: false,
    error: null
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addGoodToCart(state, { payload }) {
            state.items.push(payload);
        },
        delGoodFromCart(state, { payload }) {
            state.items = state.items.filter(item => item._id !== payload);
        },
        updateAmount(state, { payload }) {
            const index = state.items.findIndex(item => item._id === payload.id)
            state.items[index].amount = payload.newAmount
        }
    },
    extraReducers: builder => {
        builder
            .addCase(addOrder.pending, state => {
                state.isLoading = true;
            })
            .addCase(addOrder.fulfilled, (state, { payload }) => {
                state.items = []
                state.isLoading = false;
                state.error = null;
            })
            .addCase(addOrder.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
    },
});

export const { addGoodToCart, delGoodFromCart, updateAmount } = cartSlice.actions
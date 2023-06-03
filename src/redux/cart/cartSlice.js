import { createSlice } from '@reduxjs/toolkit';

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
    // extraReducers: builder => {
    //     builder
    //         .addOrder(addGoodToCart.pending, state => {
    //             state.isLoading = true;
    //         })
    //         .addCase(addGoodToCart.fulfilled, (state, { payload }) => {
    //             state.isLoading = false;
    //             state.items.push(payload);
    //             console.log('state.items: ', state.items);
    //         })
    //         .addCase(addGoodToCart.rejected, (state, { payload }) => {
    //             state.isLoading = false;
    //             state.error = payload;
    //         })
    // },
});

export const { addGoodToCart, delGoodFromCart, updateAmount } = cartSlice.actions
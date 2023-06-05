import { fetchOrders } from "api/ordersApi";

const { createAsyncThunk } = require("@reduxjs/toolkit");

export const getOrdersHistory = createAsyncThunk("orders/getHistory",
    async (credential, { rejectWithValue }) => {
        try {
            const response = await fetchOrders(credential)
            return response
        } catch (error) {
            alert("Check your email please!");
            return rejectWithValue(error.message)
        }
    })
import { fetchOrders } from "api/ordersApi";
import { toast } from "react-toastify";

const { createAsyncThunk } = require("@reduxjs/toolkit");

export const getOrdersHistory = createAsyncThunk("orders/getHistory",
    async (credential, { rejectWithValue }) => {
        try {
            const response = await fetchOrders(credential)
            return response
        } catch (error) {
            toast.success(`Check your email please!`);
            return rejectWithValue(error.message)
        }
    })
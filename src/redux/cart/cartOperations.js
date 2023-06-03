import { createAsyncThunk } from '@reduxjs/toolkit';
import { saveOrder } from 'api/orderApi';


export const addOrder = createAsyncThunk("cart/addGood",
    async (credential, { rejectWithValue }) => {
        try {
            const response = await saveOrder(credential)
            return response
        } catch (error) {
            return rejectWithValue(error.message)
        }
    });
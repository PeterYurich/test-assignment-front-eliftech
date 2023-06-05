import { createAsyncThunk } from '@reduxjs/toolkit';
import { saveOrder } from 'api/ordersApi';
import { toast } from 'react-toastify';


export const addOrder = createAsyncThunk("cart/addGood",
    async (credential, { rejectWithValue }) => {
        try {
            const response = await saveOrder(credential)
            toast.success(`We've got you order! Wait for our call!`);

            return response
        } catch (error) {
            toast.error(`Something is wrong. Check your internet connection`)
            return rejectWithValue(error.message)
        }
    });
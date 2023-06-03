import { createAsyncThunk } from '@reduxjs/toolkit';


export const addOrder = createAsyncThunk("cart/addGood",
    async (good, { rejectWithValue }) => {
        try {
            const response = good
            return response
        } catch (error) {
            return rejectWithValue(error.message)
        }
    });
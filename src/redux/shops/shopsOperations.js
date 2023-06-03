import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchShops } from 'api/shopsApi';


export const getShops = createAsyncThunk("shops/getShops",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetchShops()
            return response
        } catch (error) {
            return rejectWithValue(error.message)
        }
    });

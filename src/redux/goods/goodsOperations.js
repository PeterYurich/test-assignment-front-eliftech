import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGoods } from 'api/goodsApi';


export const getGoods = createAsyncThunk("goods/getGoods",
    async (shopId, { rejectWithValue }) => {
        try {
            const response = await fetchGoods(shopId)
            return response
        } catch (error) {
            return rejectWithValue(error.message)
        }
    });

import { axiosInstance } from "./axiosSettings";

export const fetchOrders = async (good) => {
    try {
        const { data } = await axiosInstance.get(`/shops/${data}`)
        return data
    } catch (error) {
        throw error
    }
}

export const saveOrder = async (data) => {
    try {
        const { data } = await axiosInstance.post(`/cart`)
        return data
    } catch (error) {
        throw error
    }
}
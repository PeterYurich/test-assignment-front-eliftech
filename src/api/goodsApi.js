import { axiosInstance } from "./axiosSettings";

export const fetchGoods = async (shopId) => {
    try {
        const { data } = await axiosInstance.get(`/shops/${shopId}`)
        return data
    } catch (error) {
        throw error
    }
}
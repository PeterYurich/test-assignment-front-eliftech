import { axiosInstance } from "./axiosSettings";

// export const fetchOrders = async (good) => {
//     try {
//         const { data } = await axiosInstance.get(`/shops/${data}`)
//         return data
//     } catch (error) {
//         throw error
//     }
// }

export const saveOrder = async (credentials) => {
    try {
        const { data } = await axiosInstance.post(`/orders`, credentials)
        return data
    } catch (error) {
        throw error
    }
}
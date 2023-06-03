import { axiosInstance } from "./axiosSettings";

export const fetchShops = async () => {
    try {
        const { data } = await axiosInstance.get("/shops")
        return data
    } catch (error) {
        throw error
    }
}
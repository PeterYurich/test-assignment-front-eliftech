import axios from 'axios';

const BASE_URL = 'https://delivery-service-z0p6.onrender.com/api';

export const axiosInstance = axios.create({ baseURL: BASE_URL });
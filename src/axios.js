import axios from 'axios';
import store from './store';

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL_API}`,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = store.getters.token;

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
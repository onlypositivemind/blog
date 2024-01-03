import axios from 'axios';
import { API_ENDPOINT, LocalStorage, MAX_RESPONSE_TIME } from '@/shared/const';
import { AuthResponse } from '@/shared/types';

export const $api = axios.create({
    withCredentials: true,
    baseURL: API_ENDPOINT,
    timeout: MAX_RESPONSE_TIME,
});

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = `Bearer ${localStorage.getItem(LocalStorage.ACCESS_TOKEN)}`;
    }
    return config;
});

$api.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && error.config && !error.config._isRetry) {
            originalRequest._isRetry = true;
            try {
                const { data } = await axios.get<AuthResponse>(`${__API__}/refresh`, {
                    withCredentials: true,
                });

                localStorage.setItem(LocalStorage.ACCESS_TOKEN, data.accessToken);
                return $api.request(originalRequest);
            } catch (err) {
                // eslint-disable-next-line no-console
                console.error(err);
            }
        }

        throw error;
    },
);

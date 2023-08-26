import axios from 'axios';
import { MAX_RESPONSE_TIME } from '@/shared/const/api';
import { TOKEN_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { AuthResponse } from '@/shared/types/auth';

const $api = axios.create({
    withCredentials: true,
    baseURL: __API__,
    timeout: MAX_RESPONSE_TIME,
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(TOKEN_LOCALSTORAGE_KEY)}`;
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

                localStorage.setItem(TOKEN_LOCALSTORAGE_KEY, data.tokens.accessToken);
                return $api.request(originalRequest);
            } catch (err) {
                // eslint-disable-next-line no-console
                console.error(err);
            }
        }

        throw error;
    },
);

export { $api };

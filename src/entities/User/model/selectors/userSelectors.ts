import { StateSchema } from '@/app/providers/StoreProvider';

export const selectUserAuthData = (state: StateSchema) => state.user.authData;
export const selectUserInited = (state: StateSchema) => state.user._inited;

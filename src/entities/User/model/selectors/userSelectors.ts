import { StateSchema } from '@/app/providers/StoreProvider';

export const selectUserInited = (state: StateSchema) => state.user._inited;
export const selectUserAuthData = (state: StateSchema) => state.user.authData;

import type { StateSchema } from '@/app/providers/StoreProvider';

const selectUserInited = (state: StateSchema) => state.user?._inited;

const selectUserAuthData = (state: StateSchema) => state.user?.authData;

export { selectUserInited, selectUserAuthData };

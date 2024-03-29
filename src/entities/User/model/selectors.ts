import type { StateSchema } from '@/app/providers/StoreProvider';

const selectUserInited = (state: StateSchema) => state.user?._inited;

const selectUser = (state: StateSchema) => state.user?.authData;

export { selectUserInited, selectUser };

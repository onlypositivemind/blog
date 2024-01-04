import { useEffect } from 'react';

export const useAppEffect = (cb: () => void, deps: ReadonlyArray<unknown> = []): void => {
    useEffect(() => {
        if (__PROJECT__ === 'app') {
            cb();
        }
        // eslint-disable-next-line
    }, deps);
};

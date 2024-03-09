import { useCallback, useRef } from 'react';

export const useThrottle = <T>(
    func: (...args: T[]) => void,
    ms: number,
    deps: ReadonlyArray<unknown> = [],
): ((...args: T[]) => void) => {
    const isPending = useRef(false);
    const lastArgs = useRef<T[]>([]);
    const lastFunc = useRef(func);
    lastFunc.current = func;

    const callback = useCallback((...args: T[]) => {
        if (isPending.current) {
            lastArgs.current = args;
            return;
        }
        isPending.current = true;
        lastFunc.current(...args);

        setTimeout(() => {
            isPending.current = false;

            if (lastArgs.current?.length) {
                callback(...lastArgs.current);
                lastArgs.current = [];
            }
        }, ms);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    return callback;
};

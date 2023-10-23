import { lazy } from 'react';

export const HomePageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore TODO TEST
            setTimeout(() => resolve(import('./HomePage')), 1500);
        }),
);

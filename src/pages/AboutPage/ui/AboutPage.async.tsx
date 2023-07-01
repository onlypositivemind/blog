import { lazy } from 'react';

export const AboutPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore TEST TODO
            setTimeout(() => resolve(import('./AboutPage')), 1500);
        }),
);

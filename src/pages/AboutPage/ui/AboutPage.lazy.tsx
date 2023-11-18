import { lazy } from 'react';

export const AboutPageLazy = lazy(
    () =>
        new Promise((resolve) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore TODO TEST
            setTimeout(() => resolve(import('./AboutPage')), 1500);
        }),
);

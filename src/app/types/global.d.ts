declare module '*.module.scss' {
    interface IClassNames {
        [className: string]: string;
    }

    const classNames: IClassNames;
    export = classNames;
}

declare module '*.svg' {
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.json';

declare const __IS_DEV__: boolean;
declare const __API__: string;

type Optional<T> = T | undefined;
type Nullable<T> = T | null;
type Nullish<T> = Optional<T> | Nullable<T>;

type ValueOf<T> = T[keyof T];
type KeyOf<T> = keyof T;

type OptionalRecord<K extends string | number | symbol, T> = { [P in K]?: T };

type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;

declare module '*.module.scss' {
    interface IClassNames {
        [className: string]: string;
    }

    const classNames: IClassNames;
    export = classNames;
}

declare module '*.svg' {
    import type React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.json';

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: 'app' | 'jest' | 'storybook';

type Optional<T> = T | undefined;
type Nullable<T> = T | null;
type Nullish<T> = Optional<T> | Nullable<T>;

type ValueOf<T extends object> = T[keyof T];

type OptionalRecord<K extends string | number | symbol, T> = { [U in K]?: T };

type DeepPartial<T> = T extends object ? { [U in keyof T]?: DeepPartial<T[U]> } : T;

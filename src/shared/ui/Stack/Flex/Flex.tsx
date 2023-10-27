import cn from 'classnames';
import { ReactNode } from 'react';
import s from './Flex.module.scss';

type Flex = 'flex' | 'inline';
const flexClasses: Record<Flex, string> = {
    flex: s.flex,
    inline: s.inlineFlex,
};

type FlexDirection = 'row' | 'column';
const directionClasses: Record<FlexDirection, string> = {
    row: s.directionRow,
    column: s.directionColumn,
};

type FlexAlign = 'stretch' | 'start' | 'center' | 'end';
const alignClasses: Record<FlexAlign, string> = {
    stretch: s.alignStretch,
    start: s.alignStart,
    end: s.alignEnd,
    center: s.alignCenter,
};

type FlexJustify = 'start' | 'center' | 'end' | 'between';
const justifyClasses: Record<FlexJustify, string> = {
    start: s.justifyStart,
    end: s.justifyEnd,
    center: s.justifyCenter,
    between: s.justifyBetween,
};

type FlexGap = 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32;
const gapClasses: Record<FlexGap, string> = {
    4: s.gap4,
    8: s.gap8,
    12: s.gap12,
    16: s.gap16,
    20: s.gap20,
    24: s.gap24,
    28: s.gap28,
    32: s.gap32,
};

interface FlexProps {
    children: ReactNode;
    as?: keyof JSX.IntrinsicElements;
    flex?: Flex;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
    className?: string;
}

const Flex = ({
    children,
    as: Element = 'div',
    flex = 'flex',
    direction = 'row',
    align = 'stretch',
    justify = 'start',
    max,
    gap,
    className,
}: FlexProps) => (
    <Element
        className={cn(
            className,
            flexClasses[flex],
            directionClasses[direction],
            alignClasses[align],
            justifyClasses[justify],
            gap && gapClasses[gap],
            { [s.max]: max },
        )}
    >
        {children}
    </Element>
);

export type { FlexProps };
export { Flex };

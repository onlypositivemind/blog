import cn from 'classnames';
import type { FC, SVGProps } from 'react';
import { memo } from 'react';
import s from './AppIcon.module.scss';

export type AppIconColor = 'primary' | 'white' | 'blue' | 'green' | 'red';

export type AppIconSize = 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl';

interface AppIconProps extends SVGProps<SVGSVGElement> {
    Icon: FC<SVGProps<SVGSVGElement>>;
    color?: AppIconColor;
    size?: AppIconSize;
    className?: string;
}

const AppIconComponent = ({
    Icon,
    color = 'primary',
    size = 's',
    className,
    ...restProps
}: AppIconProps) => (
    // TODO добавить span role='img'
    <Icon className={cn(className, s.appIcon, s[color], s[`size_${size}`])} {...restProps} />
);

export const AppIcon = memo(AppIconComponent);

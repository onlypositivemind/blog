import cn from 'classnames';
import { FC, memo, SVGProps } from 'react';
import s from './AppIcon.module.scss';

export type AppIconColor = 'primary' | 'white' | 'blue' | 'green' | 'red';

export type AppIconSize = 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl';

interface AppIcon extends SVGProps<SVGSVGElement> {
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
}: AppIcon) => (
    <Icon className={cn(className, s.appIcon, s[color], s[`size_${size}`])} {...restProps} />
);

export const AppIcon = memo(AppIconComponent);

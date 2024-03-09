import cn from 'classnames';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { memo } from 'react';
import s from './Button.module.scss';

type ButtonTheme =
    | 'clear'
    | 'clear_white'
    | 'outlined'
    | 'outlined_white'
    | 'primary'
    | 'blue'
    | 'red';

type ButtonSize = 's' | 'm' | 'l' | 'xl' | '2xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    theme?: ButtonTheme;
    size?: ButtonSize;
    className?: string;
}

const ButtonComponent = ({
    children,
    className,
    disabled,
    theme = 'clear',
    size = 's',
    ...props
}: ButtonProps) => (
    <button
        className={cn(s.button, s[theme], s[`size_${size}`], { [s.disabled]: disabled }, className)}
        disabled={disabled}
        {...props}
    >
        {children}
    </button>
);

export const Button = memo(ButtonComponent);

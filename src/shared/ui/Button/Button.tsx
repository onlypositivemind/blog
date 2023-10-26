import cn from 'classnames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import s from './Button.module.scss';

type ButtonTheme =
    | 'clear'
    | 'clear_white'
    | 'outlined'
    | 'outlined_white'
    | 'primary'
    | 'blue'
    | 'red';

type ButtonSize = 'size_h4' | 'size_h3' | 'size_p1' | 'size_p2' | 'size_p3';

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
    size = 'size_p3',
    ...rest
}: ButtonProps) => (
    <button
        className={cn(s.button, className, s[theme], s[size], { [s.disabled]: disabled })}
        disabled={disabled}
        {...rest}
    >
        {children}
    </button>
);

export const Button = memo(ButtonComponent);

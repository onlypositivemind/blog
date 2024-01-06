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

type ButtonSize = 'h4' | 'h3' | 'p1' | 'p2' | 'p3';

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
    size = 'p3',
    ...props
}: ButtonProps) => (
    <button
        className={cn(s.button, s[theme], s[`size_${size}`], className, { [s.disabled]: disabled })}
        disabled={disabled}
        {...props}
    >
        {children}
    </button>
);

export const Button = memo(ButtonComponent);

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
        className={cn(className, s.button, s[theme], s[`size_${size}`], { [s.disabled]: disabled })}
        disabled={disabled}
        {...props}
    >
        {children}
    </button>
);

export const Button = memo(ButtonComponent);

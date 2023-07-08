import cn from 'classnames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import s from './Button.module.scss';

type ButtonTheme = 'clear' | 'outlined' | 'outlined_white' | 'primary' | 'blue';

type ButtonSize = 'size_h4' | 'size_h3' | 'size_p1' | 'size_p2' | 'size_p3';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    theme?: ButtonTheme;
    size?: ButtonSize;
    className?: string;
}

const ButtonComponent = (props: ButtonProps) => {
    const { children, className, theme = 'clear', size = 'size_p3', ...rest } = props;

    return (
        <button className={cn(s.button, className, s[theme], s[size])} {...rest}>
            {children}
        </button>
    );
};

export const Button = memo(ButtonComponent);

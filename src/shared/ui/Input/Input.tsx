/* eslint-disable i18next/no-literal-string */
import cn from 'classnames';
import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import s from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    label?: string;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
}

const InputComponent = ({
    value,
    onChange,
    label,
    className,
    style,
    type = 'text',
    ...rest
}: InputProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [isLabelOnTop, setIsLabelOnTop] = useState(!!value);

    const handleChangeInput = (ev: ChangeEvent<HTMLInputElement>) => {
        onChange?.(ev.target.value);
    };

    const handleFocusInput = () => {
        setIsLabelOnTop(true);
    };

    const handleBlurInput = () => {
        if (!value) {
            setIsLabelOnTop(false);
        }
    };

    const handleClear = () => {
        onChange?.('');
        setIsLabelOnTop(false);
    };

    useEffect(() => {
        if (rest.autoFocus) {
            inputRef.current?.focus();
        }
    }, [rest.autoFocus]);

    return (
        <div className={cn(s.inputWrapper, className)} style={style}>
            {label && <span className={cn(s.label, { [s.top]: isLabelOnTop })}>{label}</span>}
            <input
                ref={inputRef}
                value={value}
                onChange={handleChangeInput}
                onFocus={handleFocusInput}
                onBlur={handleBlurInput}
                type={type}
                className={s.input}
                {...rest}
            />
            {value && (
                <span
                    role='button'
                    aria-label='cross-for-cleaning'
                    onClick={handleClear}
                    className={s.clearing}
                >
                    &#10006;
                </span>
            )}
        </div>
    );
};

export const Input = memo(InputComponent);

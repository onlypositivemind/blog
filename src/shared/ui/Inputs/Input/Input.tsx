import cn from 'classnames';
import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import { ClearingEmoji } from '@/shared/assets/textSymbols';
import s from '../Inputs.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
}

const InputComponent = ({
    value,
    onChange,
    className,
    disabled,
    type = 'text',
    ...rest
}: InputProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleChangeInput = (ev: ChangeEvent<HTMLInputElement>) => {
        onChange?.(ev.target.value);
    };

    const handleClear = () => {
        onChange?.('');
    };

    useEffect(() => {
        if (rest.autoFocus) {
            inputRef.current?.focus();
        }
    }, [rest.autoFocus]);

    return (
        <div className={cn(s.inputWrapper, className)}>
            <input
                ref={inputRef}
                value={value}
                onChange={handleChangeInput}
                type={type}
                className={s.input}
                {...rest}
                disabled={disabled}
            />
            {value && !disabled && (
                <span
                    role='button'
                    aria-label='cross-for-cleaning'
                    onClick={handleClear}
                    className={s.clearing}
                >
                    {ClearingEmoji}
                </span>
            )}
        </div>
    );
};

export const Input = memo(InputComponent);

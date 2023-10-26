import cn from 'classnames';
import {
    ChangeEvent,
    CSSProperties,
    InputHTMLAttributes,
    memo,
    useEffect,
    useMemo,
    useRef,
} from 'react';
import { ClearingEmoji } from '@/shared/assets/textSymbols';
import s from '../Inputs.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    value?: string | number;
    onChange?: (value: string) => void;
    className?: string;
    wrapperStyle?: CSSProperties;
}

const InputComponent = ({
    value,
    onChange,
    className,
    disabled,
    readOnly,
    wrapperStyle,
    type = 'text',
    ...rest
}: InputProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const hasClearIcon = useMemo(
        () => Boolean(value) && !disabled && !readOnly,
        [disabled, readOnly, value],
    );

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
    }, []);

    return (
        <div className={cn(s.inputWrapper, className)} style={wrapperStyle}>
            <input
                ref={inputRef}
                value={value}
                onChange={handleChangeInput}
                type={type}
                className={s.input}
                disabled={disabled}
                readOnly={readOnly}
                {...rest}
            />
            {hasClearIcon && (
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

import cn from 'classnames';
import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import s from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'placeholder'
>;

interface InputProps extends HTMLInputProps {
    placeholder: string;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
}

const InputComponent = (props: InputProps) => {
    const { value, onChange, placeholder, className, style, type = 'text', ...rest } = props;

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
            <span className={cn(s.label, { [s.top]: isLabelOnTop })}>{placeholder}</span>
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
                // eslint-disable-next-line i18next/no-literal-string
                <span className={s.clearing} onClick={handleClear}>
                    &#10006;
                </span>
            )}
        </div>
    );
};

export const Input = memo(InputComponent);

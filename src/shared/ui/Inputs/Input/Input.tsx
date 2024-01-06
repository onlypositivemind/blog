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
import { Button } from '@/shared/ui';
import ClearIcon from '@/shared/assets/icons/closeCircle.svg';
import s from '../Inputs.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    value?: string | number;
    onChange?: (value: string) => void;
    wrapperStyle?: CSSProperties;
    className?: string;
}

const InputComponent = ({
    value,
    onChange,
    className,
    disabled,
    readOnly,
    wrapperStyle,
    type = 'text',
    ...props
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
        if (props.autoFocus) {
            inputRef.current?.focus();
        }
    }, []);

    return (
        <div className={cn(className, s.inputWrapper)} style={wrapperStyle}>
            <input
                ref={inputRef}
                value={value}
                onChange={handleChangeInput}
                type={type}
                className={s.input}
                disabled={disabled}
                readOnly={readOnly}
                {...props}
            />
            {hasClearIcon && (
                <Button
                    theme='clear'
                    aria-label='cross-for-cleaning'
                    onClick={handleClear}
                    className={s.clearBtn}
                >
                    <ClearIcon />
                </Button>
            )}
        </div>
    );
};

export const Input = memo(InputComponent);

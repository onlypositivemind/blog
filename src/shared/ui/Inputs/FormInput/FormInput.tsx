import cn from 'classnames';
import type { CSSProperties, ForwardedRef, InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import s from '../Inputs.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    errorMessage?: string;
    ariaDescribedby?: string;
    wrapperStyle?: CSSProperties;
    className?: string;
}

export const FormInput = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { className, errorMessage, ariaDescribedby, wrapperStyle, ...restProps } = props;

    return (
        <div className={cn(className, s.inputWrapper)} style={wrapperStyle}>
            <input
                ref={ref}
                className={cn(s.input, s.formInput, { [s.error]: errorMessage })}
                aria-describedby={ariaDescribedby}
                {...restProps}
            />
            {errorMessage && (
                <span
                    id={ariaDescribedby}
                    aria-live={ariaDescribedby ? 'assertive' : undefined}
                    className={s.errorMessage}
                >
                    {errorMessage}
                </span>
            )}
        </div>
    );
});

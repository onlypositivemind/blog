import cn from 'classnames';
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import s from '../Inputs.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    errorMessage?: string;
    ariaDescribedby?: string;
    className?: string;
}

export const FormInput = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { className, errorMessage, ariaDescribedby, ...rest } = props;

    return (
        <div className={cn(s.inputWrapper, className)}>
            <input
                ref={ref}
                className={cn(s.input, s.formInput, { [s.error]: errorMessage })}
                aria-describedby={ariaDescribedby}
                {...rest}
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

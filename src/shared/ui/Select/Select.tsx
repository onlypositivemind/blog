import cn from 'classnames';
import { ChangeEvent, memo, useMemo } from 'react';
import s from './Select.module.scss';

interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (val: T) => void;
    disabled?: boolean;
    className?: string;
}

const SelectComponent = <T extends string>({
    className,
    options,
    value,
    onChange,
    disabled,
}: SelectProps<T>) => {
    const optionsList = useMemo(
        () =>
            options?.map((opt) => (
                <option className={s.option} key={opt.value} value={opt.value}>
                    {opt.content}
                </option>
            )),
        [options],
    );

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    return (
        <div className={cn(s.wrapper, className)}>
            <select value={value} onChange={handleChange} disabled={disabled} className={s.select}>
                {optionsList}
            </select>
        </div>
    );
};

export type { SelectOption };
export const Select = memo(SelectComponent);

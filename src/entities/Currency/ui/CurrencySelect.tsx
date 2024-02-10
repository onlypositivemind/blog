import { memo, useCallback } from 'react';
import type { SelectOption } from '@/shared/ui';
import { Select } from '@/shared/ui';
import type { Currency } from '../model/types';

const options: SelectOption<Currency>[] = [
    { value: 'RUB', content: 'RUB' },
    { value: 'EUR', content: 'EUR' },
    { value: 'USD', content: 'USD' },
];

interface CurrencySelectProps {
    value?: Currency;
    onChange?: (val: Currency) => void;
    disabled?: boolean;
    className?: string;
}

const CurrencySelectComponent = ({ value, onChange, disabled, className }: CurrencySelectProps) => {
    const handleChange = useCallback(
        (value: Currency) => {
            onChange?.(value);
        },
        [onChange],
    );

    return (
        <Select
            value={value}
            onChange={handleChange}
            options={options}
            disabled={disabled}
            className={className}
        />
    );
};

export const CurrencySelect = memo(CurrencySelectComponent);

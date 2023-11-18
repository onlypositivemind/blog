import { memo, useCallback } from 'react';
import { Select, SelectOption } from '@/shared/ui';
import { Currency } from '../../model/types/currency';

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
        (value: string) => {
            onChange?.(value as Currency);
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
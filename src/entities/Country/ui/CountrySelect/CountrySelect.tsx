import { memo, useCallback } from 'react';
import { Select, SelectOption } from '@/shared/ui';
import { Country } from '../../model/types/country';

const options: SelectOption<Country>[] = [
    { value: 'Russia', content: 'Russia' },
    { value: 'Belarus', content: 'Belarus' },
    { value: 'Ukraine', content: 'Ukraine' },
    { value: 'Kazakhstan', content: 'Kazakhstan' },
    { value: 'Armenia', content: 'Armenia' },
];

interface CountrySelectProps {
    value?: Country;
    onChange?: (val: Country) => void;
    disabled?: boolean;
    className?: string;
}

const CountrySelectComponent = ({ value, onChange, disabled, className }: CountrySelectProps) => {
    const handleChange = useCallback(
        (value: Country) => {
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

export const CountrySelect = memo(CountrySelectComponent);

import { Country } from '../../model/types/countries';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classnames/classNames';
import { memo, useCallback } from 'react';
import { Select } from 'shared/ui/Select/Select';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Canada, content: Country.Canada },
    { value: Country.USA, content: Country.USA },
    { value: Country.Mexico, content: Country.Mexico },
];

export const CountrySelect = memo(
    ({ className, value, onChange, readonly }: CountrySelectProps) => {
        const { t } = useTranslation('profile');

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Country);
            },
            [onChange]
        );

        return (
            <Select
                className={classNames('', {}, [className])}
                label={t('Country')}
                options={options}
                value={value}
                onChange={onChangeHandler}
                readonly={readonly}
            />
        );
    }
);

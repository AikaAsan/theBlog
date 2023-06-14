import { Country } from '../../model/types/countries';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';

import { ListBox } from 'shared/ui/ListBox/ListBox';

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
            <ListBox
                items={options}
                className={className}
                value={value}
                defaultValue={t('select country')}
                label={t('Country')}
                onChange={onChangeHandler}
                readonly={readonly}
            />
        );
    }
);

import { Currency } from '../../model/types/currency';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classnames/classNames';
import { Select } from 'shared/ui/Select/Select';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.CAD, content: Currency.CAD },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(
    ({ className, value, onChange, readonly }: CurrencySelectProps) => {
        const { t } = useTranslation('profile');

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Currency);
            },
            [onChange]
        );

        return (
            <Select
                className={classNames('', {}, [className])}
                label={t('Currency')}
                options={options}
                value={value}
                onChange={onChangeHandler}
                readonly={readonly}
            />
        );
    }
);

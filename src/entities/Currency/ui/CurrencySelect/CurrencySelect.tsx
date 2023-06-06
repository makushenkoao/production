import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'entities/Currency';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { CURRENCY_OPTIONS } from 'entities/Currency/model/const/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (v: Currency) => void;
    readonly?: boolean
}

export const CurrencySelect = memo((props : CurrencySelectProps) => {
    const {
        className, value, onChange, readonly,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((v: string) => {
        onChange?.(v as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Вкажіть валюту')}
            options={CURRENCY_OPTIONS}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});

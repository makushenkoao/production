import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups';
import { Currency } from '../../model/types/currency';
import { CURRENCY_OPTIONS } from '../../model/const/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (v: Currency) => void;
    readonly?: boolean;
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (v: string) => {
            onChange?.(v as Currency);
        },
        [onChange],
    );

    return (
        <ListBox
            defaultValue={t('Вкажіть валюту')}
            className={classNames('', {}, [className])}
            label={t('Вкажіть валюту')}
            items={CURRENCY_OPTIONS}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top right"
        />
    );
});

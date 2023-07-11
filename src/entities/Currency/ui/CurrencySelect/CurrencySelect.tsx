import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Currency } from '../../model/types/currency';
import { CURRENCY_OPTIONS } from '../../model/const/currency';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

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

    const listBoxProps = {
        defaultValue: t('Вкажіть валюту'),
        label: t('Вкажіть валюту'),
        className: classNames('', {}, [className]),
        items: CURRENCY_OPTIONS,
        value,
        readonly,
        onChange: onChangeHandler,
        direction: 'top right' as const,
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <ListBox
                    overflow="auto"
                    height={150}
                    {...listBoxProps}
                />
            }
            off={<ListBoxDeprecated {...listBoxProps} />}
        />
    );
});

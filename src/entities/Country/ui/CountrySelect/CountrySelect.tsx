import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Country } from '../../model/types/country';
import { COUNTRY_OPTIONS } from '../../model/const/country';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (v: Country) => void;
    readonly?: boolean;
}

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (v: string) => {
            onChange?.(v as Country);
        },
        [onChange],
    );

    const listBoxProps = {
        defaultValue: t('Вкажіть країну'),
        label: t('Вкажіть країну'),
        className: classNames('', {}, [className]),
        items: COUNTRY_OPTIONS,
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
                    height={200}
                    {...listBoxProps}
                />
            }
            off={<ListBoxDeprecated {...listBoxProps} />}
        />
    );
});

import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/Popups/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';
import { COUNTRY_OPTIONS } from '../../model/const/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (v: Country) => void;
    readonly?: boolean
}

export const CountrySelect = memo((props : CountrySelectProps) => {
    const {
        className, value, onChange, readonly,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((v: string) => {
        onChange?.(v as Country);
    }, [onChange]);

    return (
        <ListBox
            defaultValue={t('Вкажіть країну')}
            label={t('Вкажіть країну')}
            className={classNames('', {}, [className])}
            items={COUNTRY_OPTIONS}
            value={value}
            readonly={readonly}
            onChange={onChangeHandler}
            direction="top right"
        />
    );
});

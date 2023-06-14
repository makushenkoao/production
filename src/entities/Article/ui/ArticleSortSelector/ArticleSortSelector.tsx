import { memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newOrder: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        onChangeSort,
        sort,
        onChangeOrder,
        order,
    } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('зростання'),
        },
        {
            value: 'desc',
            content: t('спадання'),
        },
    ], [t]);

    const orderFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('даті створення'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('назвою'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('переглядами'),
        },
    ], [t]);

    return (
        <div
            className={classNames(cls.ArticleSortSelector, {}, [className])}
        >
            <Select<ArticleSortField>
                label={t('Сортувати ЗА')}
                options={orderFieldOptions}
                onChange={onChangeSort}
                value={sort}
            />
            <Select<SortOrder>
                label={t('ЗА')}
                options={orderOptions}
                onChange={onChangeOrder}
                value={order}
            />
        </div>
    );
});
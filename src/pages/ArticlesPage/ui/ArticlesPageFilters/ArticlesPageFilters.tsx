import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { SortOrder } from '@/shared/types';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { ArticleSortSelector } from '@/features/articleSortSelector';
import { ArticleViewSelector } from '@/features/articleViewSelector';
import { ArticleTypeTabs } from '@/features/articleTypeTabs';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const order = useSelector(getArticlesPageOrder);
    const sort = useSelector(getArticlesPageSort);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(
            fetchArticleList({
                replace: true,
            }),
        );
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view));
        },
        [dispatch],
    );

    const onChangeSort = useCallback(
        (sort: ArticleSortField) => {
            dispatch(articlesPageActions.setSort(sort));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeOrder = useCallback(
        (order: SortOrder) => {
            dispatch(articlesPageActions.setOrder(order));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlesPageActions.setSearch(search));
            dispatch(articlesPageActions.setPage(1));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData],
    );

    const onChangeType = useCallback(
        (value: ArticleType) => {
            dispatch(articlesPageActions.setType(value));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                    sort={sort}
                    order={order}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input
                    placeholder={t('Пошук')}
                    onChange={onChangeSearch}
                    value={search}
                />
            </Card>
            <ArticleTypeTabs
                className={cls.tabs}
                onChangeType={onChangeType}
                value={type}
            />
        </div>
    );
});

import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import {
    ArticleListItemSkeleton,
} from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 12 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton key={index} view={view} className={cls.card} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className, articles, view = ArticleView.SMALL, isLoading,
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [className, cls[view]])}
            >
                {getSkeletons(view)}
            </div>
        );
    }

    const renderArticle = (article: Article) => (
        <ArticleListItem key={article.id} className={cls.card} article={article} view={view} />
    );

    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {articles.length > 0
                ? articles.map(renderArticle)
                : <Text text={t('Статті відсутні')} />}
        </div>
    );
});

import { ArticleDetails, ArticleList } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading,
} from '../../model/selectors/comments';
import {
    addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from '../../model/slice/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
import {
    articleDetailsPageRecommendationsReducer,
    getArticleRecommendations,
} from '../../model/slice/articleDetailsPageRecommendationsSlice';
import {
    getArticleRecommendationsError,
    getArticleRecommendationsIsLoading,
} from '../../model/selectors/recommendations';
import {
    fetchArticleRecommendations
} from 'pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slice';

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

interface ArticleDetailsPageProps {
    className?: string;
}

export const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentsError = useSelector(getArticleCommentsError);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    const recommendationsError = useSelector(getArticleRecommendationsError);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    if (!id) {
        return (
            <Page
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                {t('Стаття не знайдена')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page
                className={classNames('', {}, [className])}
            >
                <Button
                    onClick={onBackToList}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Повернутится до списку')}
                </Button>
                <ArticleDetails id={id} />
                <Text
                    size={TextSize.L}
                    title={t('Рекомендації')}
                    className={cls.title}
                />
                <ArticleList
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    className={cls.recommendations}
                    target="_blank"
                />
                <Text
                    size={TextSize.L}
                    title={t('Коментарі')}
                    className={cls.title}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList comments={comments} isLoading={commentsIsLoading} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);

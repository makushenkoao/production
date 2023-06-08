import { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import {
    ArticleCodeBlockComponent,
} from 'entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {
    ArticleImageBlockComponent,
} from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import {
    ArticleTextBlockComponent,
} from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import cls from './ArticleDetails.module.scss';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent block={block} key={block.id} />;
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent block={block} key={block.id} />;
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent block={block} key={block.id} />;
        default:
            return null;
        }
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <div className={cls.skeletonsWrapper}>
                <Skeleton
                    width={200}
                    height={200}
                    borderRadius="50%"
                    className={cls.avatar}
                />
                <Skeleton
                    width={300}
                    height={32}
                />
                <Skeleton
                    width={600}
                    height={24}
                />
                <Skeleton
                    width="100%"
                    height={200}
                />
                <Skeleton
                    width="100%"
                    height={200}
                />
            </div>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={error}
                theme={TextTheme.ERROR}
            />
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        width={200}
                        height={200}
                        className={cls.avatar}
                        src={article?.img}
                        alt="Article image"
                    />
                </div>
                <Text
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <div className={cls.articleInfo}>
                    <Icon svg={EyeIcon} />
                    <Text
                        text={String(article?.views)}
                    />
                </div>
                <div className={cls.articleInfo}>
                    <Icon svg={CalendarIcon} />
                    <Text
                        text={article?.createdAt}
                    />
                </div>
                <div className={cls.blockWrapper}>
                    {article?.blocks.map(renderBlock)}
                </div>
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div
                className={classNames(cls.ArticleDetails, {}, [className])}
            >
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
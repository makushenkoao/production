import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    Text,
    TextAlign,
    TextSize,
    TextTheme,
} from '@/shared/ui/deprecated/Text';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { ArticleBlock } from '../../model/types/article';
import cls from './ArticleDetails.module.scss';

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

interface ArticleDetailsProps {
    className?: string;
    id?: string;
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
                return (
                    <ArticleCodeBlockComponent
                        block={block}
                        key={block.id}
                    />
                );
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent
                        block={block}
                        key={block.id}
                    />
                );
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent
                        block={block}
                        key={block.id}
                    />
                );
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
            <VStack
                gap="16"
                align="start"
            >
                <HStack
                    justify="center"
                    max
                >
                    <Skeleton
                        width={200}
                        height={200}
                        borderRadius="50%"
                    />
                </HStack>
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
                <Skeleton
                    width="100%"
                    height={200}
                />
            </VStack>
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
                <HStack
                    justify="center"
                    max
                >
                    <Avatar
                        width={200}
                        height={200}
                        src={article?.img}
                        alt="Article image"
                    />
                </HStack>
                <VStack
                    align="normal"
                    max
                    data-testid="ArticleDetails.Info"
                >
                    <Text
                        title={article?.title}
                        text={article?.subtitle}
                        size={TextSize.L}
                    />
                    <HStack gap="8">
                        <Icon svg={EyeIcon} />
                        <Text text={String(article?.views)} />
                    </HStack>
                    <HStack gap="8">
                        <Icon svg={CalendarIcon} />
                        <Text text={article?.createdAt} />
                    </HStack>
                    <VStack gap="8">{article?.blocks.map(renderBlock)}</VStack>
                </VStack>
            </>
        );
    }

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});

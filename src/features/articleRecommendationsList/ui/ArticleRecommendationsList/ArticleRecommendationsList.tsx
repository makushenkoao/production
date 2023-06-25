import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import {
    useGetArticleRecommendationsListQuery,
} from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {
        data: articles,
        isLoading,
        error,
    } = useGetArticleRecommendationsListQuery(4);

    if (error || !articles) {
        // TODO - error
        return null;
    }

    return (
        <VStack gap="8" className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Рекомендації')}
            />
            <ArticleList
                articles={articles}
                isLoading={isLoading}
                target="_blank"
            />
        </VStack>
    );
});

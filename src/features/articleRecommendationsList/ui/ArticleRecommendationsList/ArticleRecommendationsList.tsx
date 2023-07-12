import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useGetArticleRecommendationsListQuery } from '../../api/articleRecommendationsApi';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const {
            data: articles,
            isLoading,
            error,
        } = useGetArticleRecommendationsListQuery(3);

        if (error || !articles) {
            // TODO - error
            return null;
        }

        return (
            <VStack
                data-testid="ArticleRecommendationsList"
                gap="16"
                max
                className={classNames('', {}, [className])}
            >
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Text
                            size="l"
                            title={t('Рекомендації')}
                        />
                    }
                    off={
                        <TextDeprecated
                            size={TextSize.L}
                            title={t('Рекомендації')}
                        />
                    }
                />
                <ArticleList
                    articles={articles}
                    isLoading={isLoading}
                    target="_blank"
                />
            </VStack>
        );
    },
);

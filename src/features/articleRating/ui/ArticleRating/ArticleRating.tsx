import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { RatingCard } from '@/entities/Rating';
import {
    useGetArticleRatingQuery,
    useRateArticleMutation,
} from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { toggleFeatures } from '@/shared/lib/features';

export interface ArticleRatingProps {
    className?: string;
    articleId?: string;
}

const ArticleRating = (props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);

    const { isLoading, error, data } = useGetArticleRatingQuery({
        articleId,
        userId: userData?.id ?? '',
    });

    const [rateArticleMutation] = useRateArticleMutation();

    const handleRateArticle = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateArticleMutation({
                    userId: userData?.id ?? '',
                    articleId,
                    rate: starsCount,
                    feedback,
                });
            } catch (e) {
                console.log(e);
            }
        },
        [articleId, rateArticleMutation, userData?.id],
    );

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateArticle(starsCount, feedback);
        },
        [handleRateArticle],
    );

    const onCancel = useCallback(
        (starsCount: number) => {
            handleRateArticle(starsCount);
        },
        [handleRateArticle],
    );

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    if (isLoading) {
        return (
            <Skeleton
                width="100%"
                height={120}
            />
        );
    }

    if (error) {
        // TODO - error
        return null;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            className={classNames('', {}, [className])}
            title={t('Оцініть статтю')}
            feedbackTitle={t(
                'Напишіть свій відгук, який допоможе стати нам краще',
            )}
            hasFeedback
            rate={rating?.rate}
            onCancel={onCancel}
            onAccept={onAccept}
        />
    );
};

export default memo(ArticleRating);

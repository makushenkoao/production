import { memo } from 'react';
import { ArticleView } from '../../model/consts/consts';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleListItemRedesignedSkeleton } from './ArticleListItemRedesigned';
import { ArticleListItemDeprecatedSkeleton } from './ArticleListItemDeprecated';

export interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletonProps) => {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ArticleListItemRedesignedSkeleton {...props} />}
                off={<ArticleListItemDeprecatedSkeleton {...props} />}
            />
        );
    },
);

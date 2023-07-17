import { lazy, Suspense } from 'react';
import { ProfileRatingProps } from './ProfileRating';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { ToggleFeatures } from '@/shared/lib/features';

export const ProfileRatingLazy = lazy(
    async () => await import('./ProfileRating'),
);

export const ProfileRatingAsync = (props: ProfileRatingProps) => (
    <Suspense
        fallback={
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <SkeletonRedesigned
                        width="100%"
                        height={120}
                    />
                }
                off={
                    <SkeletonDeprecated
                        width="100%"
                        height={120}
                    />
                }
            />
        }
    >
        <ProfileRatingLazy {...props} />
    </Suspense>
);

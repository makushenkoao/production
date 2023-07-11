import { memo } from 'react';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { ArticleView } from '../../model/consts/consts';
import { toggleFeatures } from '@/shared/lib/features';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletonProps) => {
        const { className, view } = props;

        const Card = toggleFeatures({
            name: 'isAppRedesigned',
            on: () => CardRedesigned,
            off: () => CardDeprecated,
        });

        const Skeleton = toggleFeatures({
            name: 'isAppRedesigned',
            on: () => SkeletonRedesigned,
            off: () => SkeletonDeprecated,
        });

        if (view === ArticleView.BIG) {
            return (
                <Card className={className}>
                    <VStack
                        max
                        gap="16"
                    >
                        <HStack
                            justify="between"
                            max
                        >
                            <HStack
                                gap="8"
                                max
                            >
                                <Skeleton
                                    width={30}
                                    height={30}
                                    borderRadius="50%"
                                />
                                <Skeleton
                                    width={150}
                                    height={16}
                                />
                            </HStack>
                            <Skeleton
                                width={100}
                                height={16}
                            />
                        </HStack>
                        <Skeleton
                            width={250}
                            height={24}
                        />
                        <Skeleton height={200} />
                        <Skeleton height={50} />
                        <Skeleton
                            width={200}
                            height={36}
                        />
                    </VStack>
                </Card>
            );
        }

        return (
            <Card className={className}>
                <VStack gap="16">
                    <Skeleton
                        width={200}
                        height={200}
                    />
                    <Skeleton
                        width={130}
                        height={16}
                    />
                    <Skeleton
                        width={150}
                        height={16}
                    />
                </VStack>
            </Card>
        );
    },
);

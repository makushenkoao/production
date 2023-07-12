import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';
import { ToggleFeatures } from '@/shared/lib/features';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames('', {}, [className])}>
                <VStack
                    max
                    gap="16"
                    align="normal"
                >
                    <CommentCard isLoading />
                    <CommentCard isLoading />
                    <CommentCard isLoading />
                </VStack>
            </div>
        );
    }

    return (
        <div className={classNames('', {}, [className])}>
            {comments?.length ? (
                <VStack
                    max
                    gap="16"
                    align="normal"
                >
                    {comments.map((comment) => (
                        <CommentCard
                            key={comment.id}
                            comment={comment}
                            isLoading={isLoading}
                        />
                    ))}
                </VStack>
            ) : (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text text={t('Коментарі відсутні')} />}
                    off={<TextDeprecated text={t('Коментарі відсутні')} />}
                />
            )}
        </div>
    );
});

import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();

    return (
        <div
            className={classNames(cls.CommentList, {}, [className])}
        >
            {comments?.length
                ? (
                    <div className={cls.comments}>
                        {comments.map((comment) => (
                            <CommentCard comment={comment} isLoading={isLoading} />
                        ))}
                    </div>
                )
                : <Text text={t('Коментарі відсутні')} />}
        </div>
    );
});

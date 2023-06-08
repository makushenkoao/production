import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    // TODO - loader(skeleton)
    // Skeleton not working
    // The component CommentsList returns either comments or the text "No comments"

    if (isLoading) {
        return (
            <div
                className={classNames(cls.CommentCard, {}, [className])}
            >
                <div className={cls.header}>
                    <Skeleton width={30} height={30} borderRadius="50%" />
                    <Skeleton width={50} height={15} />
                </div>
                <Skeleton width="100%" height={50} />
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.CommentCard, {}, [className])}
        >
            <div className={cls.header}>
                <Avatar
                    width={30}
                    height={30}
                    src={comment.user.avatar
                        ? comment.user.avatar
                        : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
                />
                <Text title={comment.user.username} />
            </div>
            <Text text={comment.text} />
        </div>
    );
});

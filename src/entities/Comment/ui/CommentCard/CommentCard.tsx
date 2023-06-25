import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Text } from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div
                className={classNames(cls.CommentCard, {}, [className, cls.loading])}
            >
                <div className={cls.header}>
                    <Skeleton width={30} height={30} borderRadius="50%" />
                    <Skeleton width={50} height={15} />
                </div>
                <Skeleton width="100%" height={50} />
            </div>
        );
    }

    if (!comment) return null;

    return (
        <div
            className={classNames(cls.CommentCard, {}, [className])}
        >
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
                <Avatar
                    width={30}
                    height={30}
                    rounded
                    src={comment.user.avatar
                        ? comment.user.avatar
                        // TODO - add default user icon
                        : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
                />
                <Text title={comment.user.username} />
            </AppLink>
            <Text text={comment.text} />
        </div>
    );
});

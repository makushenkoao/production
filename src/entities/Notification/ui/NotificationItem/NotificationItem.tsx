import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
  className?: string;
  item: Notification
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const {
        className, item: {
            id,
            href,
            title,
            description,
        },
    } = props;

    const content = (
        <Card
            theme={CardTheme.OUTLINED}
            className={classNames(cls.NotificationItem, {}, [className])}
        >
            <Text title={title} text={description} />
        </Card>
    );

    if (href) {
        return (
            <a className={cls.link} target="_blank" href={href} rel="noreferrer">
                {content}
            </a>
        );
    }

    return content;
});

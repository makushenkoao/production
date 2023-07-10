import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const {
        className,
        item: { id, href, title, description },
    } = props;

    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    className={classNames(cls.NotificationItem, {}, [
                        className,
                    ])}
                >
                    <Text
                        title={title}
                        text={description}
                    />
                </Card>
            }
            off={
                <CardDeprecated
                    theme={CardTheme.OUTLINED}
                    className={classNames(cls.NotificationItem, {}, [
                        className,
                    ])}
                >
                    <TextDeprecated
                        title={title}
                        text={description}
                    />
                </CardDeprecated>
            }
        />
    );

    if (href) {
        return (
            <a
                className={cls.link}
                target="_blank"
                href={href}
                rel="noreferrer"
            >
                {content}
            </a>
        );
    }

    return content;
});

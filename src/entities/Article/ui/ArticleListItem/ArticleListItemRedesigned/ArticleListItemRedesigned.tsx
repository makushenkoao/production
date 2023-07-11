import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleListItemProps } from '../ArticleListItem';
import { Text } from '@/shared/ui/redesigned/Text';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { ArticleBlockType, ArticleView } from '../../../model/consts/consts';
import { ArticleTextBlock } from '../../../model/types/article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { getRouteArticleDetails } from '@/shared/const/router';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import EyeIcon from '@/shared/assets/icons/eye-re.svg';
import cls from './ArticleListItemRedesigned.module.scss';

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation();

    const views = (
        <HStack gap="8">
            <Icon svg={EyeIcon} />
            <Text text={String(article.views)} />
        </HStack>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;
        return (
            <Card
                max
                data-testid="ArticleListItem"
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
                padding="24"
            >
                <VStack
                    gap="16"
                    max
                >
                    <HStack gap="8">
                        <Avatar
                            width={32}
                            height={32}
                            src={article.user.avatar}
                        />
                        <Text
                            bold
                            text={article.user.username}
                        />
                        <Text text={article.createdAt} />
                    </HStack>
                    <Text
                        bold
                        title={article.title}
                    />
                    <Text
                        size="s"
                        title={article.subtitle}
                    />
                    <AppImage
                        src={article.img}
                        alt={article.title}
                        fallback={
                            <Skeleton
                                width="100%"
                                height={250}
                            />
                        }
                        className={cls.img}
                    />
                    {textBlock?.paragraphs && (
                        <Text
                            className={cls.textBlock}
                            text={textBlock.paragraphs.slice(0, 2).join(' ')}
                        />
                    )}
                    <HStack
                        max
                        justify="between"
                    >
                        <AppLink
                            to={getRouteArticleDetails(article.id)}
                            target={target}
                        >
                            <Button>{t('Читати далі')}</Button>
                        </AppLink>
                        {views}
                    </HStack>
                </VStack>
            </Card>
        );
    }

    return (
        <AppLink
            data-testid="ArticleListItem"
            to={getRouteArticleDetails(article.id)}
            target={target}
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}
        >
            <Card>
                <div>
                    <AppImage
                        src={article.img}
                        alt={article.title}
                        fallback={
                            <Skeleton
                                width={200}
                                height={200}
                            />
                        }
                    />
                    <Text text={article.createdAt} />
                </div>
                <div>
                    <Text text={article.type.join(' ')} />
                    {views}
                </div>
                <Text title={article.title} />
            </Card>
        </AppLink>
    );
});

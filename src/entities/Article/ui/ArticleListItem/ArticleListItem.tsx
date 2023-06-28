import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Icon } from '@/shared/ui/Icon';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';
import { ArticleBlockType, ArticleView } from '../../model/consts/consts';
import cls from './ArticleListItem.module.scss';
import {
    Article,
    ArticleTextBlock,
} from '../../model/types/article';
import {
    ArticleTextBlockComponent,
} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { RoutePath } from '@/shared/const/router';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className, article, view, target,
    } = props;
    const { t } = useTranslation();

    const types = <Text text={article.type.join(' ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon svg={EyeIcon} />
        </>
    );

    const image = <img className={cls.img} alt={article.title} src={article.img} />;

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks
            .find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            >
                <Card>
                    <div className={cls.header}>
                        <Avatar width={30} height={30} src={article.user.avatar} rounded />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    {image}
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <AppLink to={RoutePath.article_details + article.id} target={target}>
                            <Button theme={ButtonTheme.OUTLINE}>{t('Читати далі')}</Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            to={RoutePath.article_details + article.id}
            target={target}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card>
                <div className={cls.imageWrapper}>
                    {image}
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text title={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});

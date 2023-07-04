import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { ArticleView } from '@/entities/Article';
import { VIEW_TYPES } from '../../model/consts';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, onViewClick, view } = props;
    const { t } = useTranslation();

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {VIEW_TYPES.map((viewType) => (
                <Button
                    key={viewType.view}
                    onClick={onClick(viewType.view)}
                    theme={ButtonTheme.CLEAR}
                >
                    <Icon
                        svg={viewType.icon}
                        className={classNames('', {
                            [cls.notSelected]: viewType.view !== view,
                        })}
                    />
                </Button>
            ))}
        </div>
    );
});

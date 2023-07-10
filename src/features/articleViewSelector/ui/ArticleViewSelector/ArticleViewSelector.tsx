import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { ArticleView } from '@/entities/Article';
import { VIEW_TYPES } from '../../model/consts';
import cls from './ArticleViewSelector.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    className={classNames(
                        cls.ArticleViewSelectorRedesigned,
                        {},
                        [className],
                    )}
                    padding="1"
                    border="round"
                >
                    <HStack>
                        {VIEW_TYPES.map((viewType, index) => (
                            <Icon
                                key={viewType.view}
                                svg={viewType.icon}
                                className={classNames('', {
                                    [cls.selectedRedesigned]:
                                        viewType.view === view,
                                    [cls.left]: index === 0,
                                    [cls.right]: index === 1,
                                })}
                                clickable
                                onClick={onClick(viewType.view)}
                            />
                        ))}
                    </HStack>
                </Card>
            }
            off={
                <div
                    className={classNames(cls.ArticleViewSelector, {}, [
                        className,
                    ])}
                >
                    {VIEW_TYPES.map((viewType) => (
                        <ButtonDeprecated
                            key={viewType.view}
                            onClick={onClick(viewType.view)}
                            theme={ButtonTheme.CLEAR}
                        >
                            <IconDeprecated
                                svg={viewType.icon}
                                className={classNames('', {
                                    [cls.notSelected]: viewType.view !== view,
                                })}
                                width={24}
                                height={24}
                            />
                        </ButtonDeprecated>
                    ))}
                </div>
            }
        />
    );
});

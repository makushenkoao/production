import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { Icon } from '../Icon/Icon';
import StarIcon from '../../../assets/icons/star.svg';

interface StarRatingProps {
    className?: string;
    onSelect?: (startCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

/**
 * Deprecated, use new components from redesigned
 * @deprecated
 */
export const StarRating = memo((props: StarRatingProps) => {
    const { className, selectedStars = 0, size = 30, onSelect } = props;
    const [currentStarsCount, setCurrentStarsCount] =
        useState<number>(selectedStars);
    const [isSelected, setIsSelected] = useState<boolean>(
        Boolean(selectedStars),
    );

    const onHover = (startCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(startCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames('', {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    svg={StarIcon}
                    key={starNumber}
                    className={classNames(
                        cls.starIcon,
                        {
                            [cls.selected]: isSelected,
                        },
                        [
                            currentStarsCount >= starNumber
                                ? cls.hovered
                                : cls.normal,
                        ],
                    )}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                    data-testid={`StarRating.${starNumber}`}
                    data-selected={currentStarsCount >= starNumber}
                />
            ))}
        </div>
    );
});

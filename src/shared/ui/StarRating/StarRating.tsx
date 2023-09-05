import { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classnames/classNames';
import cls from './StarRating.module.scss';
import { Icon } from '../Icon/Icon';
import star from '@/shared/assets/icons/star.svg';
interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating: FC<StarRatingProps> = memo(
    (props: StarRatingProps) => {
        const { className, onSelect, size = 30, selectedStars = 0 } = props;
        const { t } = useTranslation();

        const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
        const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

        //used closure to close starCount var in order to keep it in context
        const onHover = (starCount: number) => () => {
            if (!isSelected) {
                setCurrentStarsCount(starCount);
            }
        };

        const onLeave = () => {
            if (!isSelected) {
                setCurrentStarsCount(0);
            }
        };

        const onClick = (starsCount: number) => () => {
            // if (!isSelected) {
            //     onSelect?.(starsCount);
            //     setCurrentStarsCount(starsCount);
            //     setIsSelected(true);
            // }
            console.log('starCount in OnClick', starsCount);
            if (starsCount === 1) {
                onSelect?.(starsCount);
                setCurrentStarsCount(starsCount);
                setIsSelected(!isSelected);
            }
            if (!isSelected && starsCount > 1) {
                onSelect?.(starsCount);
                setCurrentStarsCount(starsCount);
                setIsSelected(true);
            }
        };

        console.log('currentStarCount', currentStarsCount);
        console.log('IsSelected', isSelected);

        return (
            <div className={classNames(cls.starRating, {}, [className])}>
                {stars.map((starNumber) => (
                    <Icon
                        Svg={star}
                        key={starNumber}
                        className={classNames(
                            cls.starIcon,
                            { [cls.selected]: isSelected },
                            [
                                currentStarsCount >= starNumber
                                    ? cls.hovered
                                    : cls.normal,
                            ]
                        )}
                        width={size}
                        height={size}
                        onMouseEnter={onHover(starNumber)}
                        onMouseLeave={onLeave}
                        onClick={onClick(starNumber)}
                    />
                ))}
            </div>
        );
    }
);

import { ArticleView } from '../../model/consts/articleConsts';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classnames/classNames';
import cls from './ArticleViewSelector.module.scss';
import listIcon from '@/shared/assets/icons/list-24-24.svg';
import tileIcon from '@/shared/assets/icons/tiled-24-24.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button/ui/Button';
import { Icon } from '@/shared/ui/Icon/Icon';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.GRID,
        icon: tileIcon,
    },
    {
        view: ArticleView.LIST,
        icon: listIcon,
    },
];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = memo(
    (props: ArticleViewSelectorProps) => {
        const { className, view, onViewClick } = props;
        const { t } = useTranslation();
        const onClickHandler = (newView: ArticleView) => () => {
            onViewClick?.(newView);
        };

        return (
            <div
                className={classNames(cls.ArticleViewSelector, {}, [className])}
            >
                {viewTypes.map((viewType) => {
                    return (
                        <Button
                            theme={ButtonTheme.CLEAR}
                            onClick={onClickHandler(viewType.view)}
                            key={viewType.view}
                        >
                            <Icon
                                Svg={viewType.icon}
                                className={classNames('', {
                                    [cls.notSelected]: viewType.view !== view,
                                })}
                                key={viewType.view}
                                // className={cls.notSelected}
                            />
                        </Button>
                    );
                })}
            </div>
        );
    }
);

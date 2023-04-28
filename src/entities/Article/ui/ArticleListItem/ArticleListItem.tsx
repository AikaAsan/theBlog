import {
    Article,
    ArticleBlockType,
    ArticleTextBlock,
    ArticleView,
} from '../../model/types/article';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classnames/classNames';
import cls from './ArticleListItem.module.scss';
import { Text } from 'shared/ui/Text/ui/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem: FC<ArticleListItemProps> = memo(
    (props: ArticleListItemProps) => {
        const { className, article, view } = props;
        const { t } = useTranslation('article');
        const navigate = useNavigate();
        const [isHover, bindHover] = useHover();

    
        const types = (
            <Text text={article.type.join(', ')} className={cls.types} />
        );
        const views = (
            <>
                <Text text={String(article.views)} className={cls.views} />
                <Icon Svg={EyeIcon} />
            </>
        );

        const onOpenArticle = useCallback(() => {
            navigate(RoutePath.article_details + article.id);
        }, [article.id, navigate]);

        if (view === ArticleView.LIST) {
            const textBlock = article.blocks.find(
                (block) => block.type === ArticleBlockType.TEXT
            ) as ArticleTextBlock;
            return (
                <div
                    className={classNames(cls.articleListItem, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <Card className={cls.card}>
                        <div className={cls.header}>
                            <Avatar
                                src={article.user.avatar}
                                size={30}
                                alt={article.user.username}
                            />
                            <Text
                                text={article.user.username}
                                className={cls.username}
                            />
                            <Text
                                text={article.createdAt}
                                className={cls.date}
                            />
                        </div>
                        <Text title={article.title} className={cls.title} />
                        {types}
                        <img
                            src={article.img}
                            className={cls.img}
                            alt={article.title}
                        />
                        {textBlock && (
                            <ArticleTextBlockComponent
                                block={textBlock}
                                className={cls.textBlock}
                            />
                        )}
                        <div className={cls.footer}>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onOpenArticle}
                            >
                                {t('read...')}
                            </Button>
                            {views}
                        </div>
                    </Card>
                </div>
            );
        }
        return (
            <div
                className={classNames(cls.articleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card>
                    <div
                        {...bindHover}
                        className={cls.imageWrapper}
                        onClick={onOpenArticle}
                    >
                        <img
                            className={cls.img}
                            src={article.img}
                            alt={article.title}
                        />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <div className={cls.infoWrapper}>
                        {types}
                        {views}
                    </div>
                    <Text text={article.title} className={cls.title} />
                </Card>{' '}
            </div>
        );
    }
);

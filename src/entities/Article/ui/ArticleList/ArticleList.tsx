import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/consts/articleConsts'
import { FC, HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classnames/classNames';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from 'shared/ui/Text/ui/Text';
interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.GRID ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                className={cls.card}
                key={index}
                view={view}
            />
        ));

export const ArticleList: FC<ArticleListProps> = memo(
    (props: ArticleListProps) => {
        const {
            className,
            articles,
            isLoading,
            view = ArticleView.GRID,
            target,
        } = props;

        const { t } = useTranslation();

        const renderArticle = (article: Article) => {
            return (
                <ArticleListItem
                    article={article}
                    view={view}
                    key={article.id}
                    className={cls.card}
                    target={target}
                />
            );
        };

        if (!isLoading && !articles.length) {
            return (
                <div
                    className={classNames(cls.ArticleList, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <Text size={TextSize.L} title={t('Articles Not Found')} />
                </div>
            );
        }

        return (
            <div
                className={classNames(cls.articleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                {articles.length > 0 ? articles.map(renderArticle) : null}
                {isLoading && getSkeletons(view)}
            </div>
        );
    }
);

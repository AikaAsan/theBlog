import { Article, ArticleView } from '../../model/types/article';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classnames/classNames';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
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
        } = props;

        const { t } = useTranslation();
        if (isLoading) {
            return (
                <div
                    className={classNames(cls.ArticleList, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    {getSkeletons(view)}
                </div>
            );
        }
        const renderArticle = (article: Article) => {
            return (
                <div>
                    <ArticleListItem
                        article={article}
                        view={view}
                        key={article.id}
                        className={cls.card}
                    />
                </div>
            );
        };

        return (
            <div
                className={classNames(cls.articleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                {articles.length > 0 ? articles.map(renderArticle) : null}
            </div>
        );
    }
);

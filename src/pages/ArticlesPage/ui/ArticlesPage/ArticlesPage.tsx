/* eslint-disable max-len */
import {
    Article,
    ArticleList,
    ArticleView,
    ArticleViewSelector,
} from 'entities/Article';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlePageSelectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList';
import {
    articlesPageActions,
    articlesPageReducer,
    getArticles,
} from '../../model/slices/articlesPageSlice';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/classnames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import cls from './ArticlesPage.module.scss';

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view));
            console.log('clicked');
        },
        [dispatch]
    );

    useInitialEffect(() => {
        console.log('intital effect in Articles page');
        dispatch(fetchArticlesList());
        dispatch(articlesPageActions.initialState());
    });
    return (
        <DynamicModuleLoader reducers={reducers} name={`articlesPage`}>
            <div className={classNames(cls.articlesPage, {}, [className])}>
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);

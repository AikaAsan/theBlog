/* eslint-disable max-len */
import {
    articlesPageReducer,
} from '../../model/slices/articlesPageSlice';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from '@/shared/lib/classnames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import cls from './ArticlesPage.module.scss';
import { Page } from '@/shared/ui/Page/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { useSearchParams } from 'react-router-dom';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';

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
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicModuleLoader
            reducers={reducers}
            name={`articlesPage`}
            removeAfterUnmount={false}
        >
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.articlesPage, {}, [className])}
            >
                <ArticlesPageFilters />
                <ArticleInfiniteList className={cls.list} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);

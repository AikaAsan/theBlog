/* eslint-disable max-len */
import { ArticleDetails } from 'entities/Article';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classnames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'shared/ui/Page/Page';

import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { VStack } from 'shared/ui/Stack';
import { ArticlesRecommendationsList } from 'features/ArticlesRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};
interface ArticleDetailsPageProps {
    className?: string;
    id?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();
    //
    //     if (!id) {
    //         return (
    //             <Page
    //                 className={classNames(cls.ArticleDetailsPage, {}, [className])}
    //             >
    //                 {t('Article is not found')}
    //             </Page>
    //         );
    //     }
    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
            name={`articleDetailsPage`}
        >
            <Page
                className={classNames(cls.articleDetailsPage, {}, [className])}
            >
                <VStack gap='16' max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <ArticlesRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);

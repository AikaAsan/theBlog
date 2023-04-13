/* eslint-disable i18next/no-literal-string */
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/classnames/classNames';
import cls from './ArticleDetails.module.scss';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { Text, TextAlign } from 'shared/ui/Text/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};
export const ArticleDetails: FC<ArticleDetailsProps> = memo(
    (props: ArticleDetailsProps) => {
        const { className, id } = props;
        const { t } = useTranslation('article');
        const dispatch = useAppDispatch();
        const isLoading = useSelector(getArticleDetailsIsLoading);
        const article = useSelector(getArticleDetailsData);
        const error = useSelector(getArticleDetailsError);

        useEffect(() => {
            if (__PROJECT__ !== 'storybook') {
                dispatch(fetchArticleById(id));
            }
        }, [dispatch, id]);

        let content;

        if (isLoading) {
            content = (
                <div>
                    <Skeleton
                        width={200}
                        height={200}
                        border='50%'
                        className={cls.avatar}
                    />
                    <Skeleton width={300} height={32} className={cls.title} />
                    <Skeleton
                        width={600}
                        height={24}
                        className={cls.skeleton}
                    />
                    <Skeleton
                        width='100%'
                        height={200}
                        className={cls.skeleton}
                    />
                    <Skeleton
                        width='100%'
                        height={200}
                        className={cls.skeleton}
                    />
                </div>
            );
        } else if (error) {
            content = (
                <Text title={t('Error Occured')} align={TextAlign.CENTER} />
            );
        } else {
            content = <div> ArticleDetails</div>;
        }
        return (
            <DynamicModuleLoader
                name={'articleDetails'}
                reducers={reducers}
                removeAfterUnmount
            >
                <div
                    className={classNames(cls.articleDetails, {}, [className])}
                >
                    {content}
                </div>
            </DynamicModuleLoader>
        );
    }
);

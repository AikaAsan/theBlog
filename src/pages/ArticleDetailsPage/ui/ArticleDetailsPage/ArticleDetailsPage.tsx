/* eslint-disable max-len */
import { ArticleDetails, ArticleList } from 'entities/Article';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classnames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { Text, TextSize } from 'shared/ui/Text/ui/Text';
import { CommentList } from 'entities/Comment';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getArticleDetailsCommentsisLoading } from '../../model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import AddCommentForm from 'features/AddCommentForm/ui/AddCommentForm/AddCommentForm';
import { addCommentForArticle } from '../../model/services/AddCommentForArticle/AddCommentForArticle';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'shared/ui/Page/Page';
import { getArticleRecommendations } from '../../model/slices/articleDetailsPageRecommendationsSlice';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../../model/slices';

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};
interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommenadtionsIsLoading = useSelector(
        getArticleRecommendationsIsLoading
    );
    const navigate = useNavigate();

    const commentsIsLoading = useSelector(getArticleDetailsCommentsisLoading);

    const onSendCommentHandler = useCallback(
        (text) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch]
    );
    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });
    if (!id) {
        return (
            <Page
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                {t('Article is not found ')}
            </Page>
        );
    }
    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
            name={`articleDetailsPage`}
        >
            <Page
                className={classNames(cls.articleDetailsPage, {}, [className])}
            >
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t('back to the list')}
                </Button>
                <ArticleDetails id={id} />
                <Text
                    title={t('Recommendations')}
                    className={cls.commentTitle}
                    size={TextSize.L}
                />
                <ArticleList
                    articles={recommendations}
                    isLoading={recommenadtionsIsLoading}
                    className={cls.recommendations}
                    target={`_blank`}
                />
                <Text title={t('Comments')} className={cls.commentTitle} />
                <AddCommentForm onSendComment={onSendCommentHandler} />
                <CommentList
                    comments={comments}
                    isLoading={commentsIsLoading}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);

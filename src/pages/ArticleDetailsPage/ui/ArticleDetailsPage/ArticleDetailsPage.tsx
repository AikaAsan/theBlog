/* eslint-disable max-len */
import { ArticleDetails } from 'entities/Article';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classnames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { Text } from 'shared/ui/Text/ui/Text';
import { CommentList } from 'entities/Comment';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getArticleDetailsCommentsisLoading } from '../../model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId';

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
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

    const commentsIsLoading = useSelector(getArticleDetailsCommentsisLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });
    if (!id) {
        return (
            <div
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                {t('Article is not found ')}
            </div>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div
                className={classNames(cls.articleDetailsPage, {}, [className])}
            >
                <ArticleDetails id={id} />
                <Text title={t('Comments')} className={cls.commentTitle} />
                <CommentList
                    comments={comments}
                    isLoading={commentsIsLoading}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);

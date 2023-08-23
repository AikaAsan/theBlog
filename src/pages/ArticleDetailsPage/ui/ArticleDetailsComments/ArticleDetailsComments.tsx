import { FC, Suspense, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classnames/classNames';
import { CommentList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/AddCommentForm';
import { Text, TextSize } from '@/shared/ui/Text/ui/Text';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentForArticle } from '../../model/services/AddCommentForArticle/AddCommentForArticle';
import { getArticleDetailsCommentsisLoading } from '../../model/selectors/comments';
import { VStack } from '@/shared/ui/Stack';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Loader } from '@/shared/ui/Loader';
interface ArticleDetailsCommentsProps {
    className?: string;
    id?: string;
}

export const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = memo(
    (props: ArticleDetailsCommentsProps) => {
        const { className, id } = props;
        const { t } = useTranslation('article');
        const dispatch = useDispatch();
        const comments = useSelector(getArticleComments.selectAll);
        const commentsIsLoading = useSelector(
            getArticleDetailsCommentsisLoading
        );

        const onSendCommentHandler = useCallback(
            (text: string) => {
                dispatch(addCommentForArticle(text));
            },
            [dispatch]
        );

        useInitialEffect(() => {
            dispatch(fetchCommentsByArticleId(id));
        });

        return (
            <VStack gap='16' max className={classNames('', {}, [className])}>
                <Text title={t('Comments')} size={TextSize.L} />
                <Suspense fallback={<Loader/>}>
                    <AddCommentForm onSendComment={onSendCommentHandler} />
                </Suspense>
                <CommentList
                    comments={comments}
                    isLoading={commentsIsLoading}
                />
            </VStack>
        );
    }
);

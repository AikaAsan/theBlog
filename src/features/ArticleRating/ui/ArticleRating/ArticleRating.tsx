import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classnames/classNames';
import { RatingCard } from '@/entities/Rating';
import {
    useGetArticleRating,
    useRateArticle,
} from '../../api/articleRatingApi';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating: FC<ArticleRatingProps> = memo(
    (props: ArticleRatingProps) => {
        const { className, articleId } = props;
        const { t } = useTranslation('translation');
        const userData = useSelector(getUserAuthData);

        const { data, isLoading } = useGetArticleRating({
            articleId,
            userId: userData?.id ?? '',
            //nullish coalesing operator ??  if userData.id is null then it will return ''
        });

        const [rateArticleMutation] = useRateArticle();

        const rateArticleHandler = useCallback(
            (starsCount: number, feedback?: string) => {
                try {
                    rateArticleMutation({
                        userId: userData?.id ?? '',
                        articleId,
                        rate: starsCount,
                        feedback,
                    });
                } catch (e) {
                    //handle error
                    console.log(e);
                }
            },
            [articleId, rateArticleMutation, userData?.id]
        );

        const onAccept = useCallback(
            (starsCount: number, feedback?: string) => {
                rateArticleHandler(starsCount, feedback);
            },
            [rateArticleHandler]
        );

        const onCancel = useCallback(
            (starsCount: number) => {
                rateArticleHandler(starsCount);
            },
            [rateArticleHandler]
        );

        if (isLoading) {
            return <Skeleton width='100%' height={120} />;
        }

        const rating = data?.[0];

        return (
            <RatingCard
                onAccept={onAccept}
                onCancel={onCancel}
                rate={rating?.rate}
                className={classNames('', {}, [className])}
                title={t('Please, rate the article')}
                feedbackTitle={t(
                    'Thank you for the feedback; it greatly contributes to improving the quality.'
                )}
                hasFeedback={true}
            ></RatingCard>
        );
    }
);

export default ArticleRating;

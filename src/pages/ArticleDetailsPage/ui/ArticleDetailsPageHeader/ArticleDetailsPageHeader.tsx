import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classnames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/ui/Button';
import { RoutePath } from '@/shared/const/router';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from '@/entities/Article';
import { getcanUserEditArticle } from '../../model/selectors/article';
import { HStack } from '@/shared/ui/Stack';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = memo(
    (props: ArticleDetailsPageHeaderProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const navigate = useNavigate();
        const article = useSelector(getArticleDetailsData);
        const canEdit = useSelector(getcanUserEditArticle);

        const onBackToList = useCallback(() => {
            navigate(RoutePath.articles);
        }, [navigate]);

        const onEditArticle = useCallback(() => {
            navigate(`${RoutePath.article_details}${article?.id}/edit`);
        }, [article?.id, navigate]);

        return (
            <HStack
                max
                justify='between'
                className={classNames('', {}, [className])}
            >
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t('back to the list')}
                </Button>
                {canEdit && (
                    <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
                        {t('edit')}
                    </Button>
                )}
            </HStack>
        );
    }
);

import { classNames } from 'shared/lib/classnames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/ui/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { useArtcileRecommendationsList } from '../../api/ArticleRecommendationsApi';

interface ArticlesRecommendationsListProps {
    className?: string;
}

export const ArticlesRecommendationsList = memo(
    (props: ArticlesRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();

        const {
            isLoading,
            data: articles,
            error,
        } = useArtcileRecommendationsList(3);

        if (isLoading || error || !articles) {
            return null;
        }

        return (
            <VStack gap='8' className={classNames('', {}, [className])}>
                <Text title={t('Recommendations')} size={TextSize.L} />
                <ArticleList articles={articles} target={`_blank`} />
            </VStack>
        );
    }
);

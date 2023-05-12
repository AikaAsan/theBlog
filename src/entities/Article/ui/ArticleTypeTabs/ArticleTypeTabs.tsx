import { ArticleType } from 'entities/Article/model/types/article';
import { FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classnames/classNames';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs: FC<ArticleTypeTabsProps> = memo(
    (props: ArticleTypeTabsProps) => {
        const { className, value, onChangeType } = props;
        const { t } = useTranslation();

        const typeTabs = useMemo<TabItem[]>(
            () => [
                {
                    value: ArticleType.ALL,
                    content: t('All Articles'),
                },
                {
                    value: ArticleType.IT,
                    content: t('IT'),
                },

                {
                    value: ArticleType.SCIENCE,
                    content: t('SCIENCE'),
                },
                {
                    value: ArticleType.ECONOMICS,
                    content: t('ECONOMICS'),
                },
            ],
            [t]
        );

        const onTabClickHandler = useCallback(
            (tab: TabItem) => {
                //had to do a handler to cast to rigth type
                onChangeType(tab.value as ArticleType);
            },
            [onChangeType]
        );

        return (
            <Tabs
                tabs={typeTabs}
                value={value}
                onTabClick={onTabClickHandler}
                className={classNames('', {}, [className])}
            />
        );
    }
);

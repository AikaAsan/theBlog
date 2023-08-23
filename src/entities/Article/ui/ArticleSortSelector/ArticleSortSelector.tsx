import { ArticleSortField } from '../../model/consts/articleConsts';
import { FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classnames/classNames';
import { SortOrder } from '@/shared/types';
import { Select, SelectOption } from '@/shared/ui/Select/Select';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = memo(
    (props: ArticleSortSelectorProps) => {
        const { className, sort, order, onChangeOrder, onChangeSort } = props;
        const { t } = useTranslation();

        const orderOptions = useMemo<SelectOption[]>(
            () => [
                {
                    value: 'asc',
                    content: t('asc'),
                },
                {
                    value: 'desc',
                    content: t('desc'),
                },
            ],
            [t]
        );

        const sortFieldOptions = useMemo<SelectOption[]>(
            () => [
                {
                    value: ArticleSortField.CREATED,
                    content: t('date created'),
                },
                {
                    value: ArticleSortField.TITLE,
                    content: t('title'),
                },
                {
                    value: ArticleSortField.VIEWS,
                    content: t('views'),
                },
            ],
            [t]
        );

        const onChangeSortHandler = useCallback(
            (newSort: string) => {
                onChangeSort(newSort as ArticleSortField);
            },
            [onChangeSort]
        );

        const onChangeOrderHandler = useCallback(
            (newOrder: string) => {
                onChangeOrder(newOrder as SortOrder);
            },
            [onChangeOrder]
        );

        return (
            <div
                className={classNames(cls.articleSortSelector, {}, [className])}
            >
                {' '}
                <Select
                    label={t('Sort By')}
                    options={sortFieldOptions}
                    value={sort}
                    onChange={onChangeSortHandler}
                />
                <Select
                    label={t('By')}
                    options={orderOptions}
                    value={order}
                    onChange={onChangeOrderHandler}
                    className={cls.order}
                />
            </div>
        );
    }
);

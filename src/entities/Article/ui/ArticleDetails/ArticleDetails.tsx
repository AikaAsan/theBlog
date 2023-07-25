/* eslint-disable i18next/no-literal-string */
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { FC, memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/classnames/classNames';
import cls from './ArticleDetails.module.scss';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import eyeIcon from 'shared/assets/icons/eye-20-20.svg';
import calendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { ArticleBlock } from '../../model/types/article';
import { ArticleBlockType} from '../../model/consts/articleConsts'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { HStack, VStack } from 'shared/ui/Stack';
interface ArticleDetailsProps {
    className?: string;
    id?: string;
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

        const renderBlock = useCallback((block: ArticleBlock) => {
            switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent
                        key={block.id}
                        block={block}
                        className={cls.block}
                    />
                );
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent
                        block={block}
                        key={block.id}
                    />
                );
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent
                        key={block.id}
                        block={block}
                    />
                );
            default:
                return null;
            }
        }, []);

        //         useInitialEffect(() => {
        //
        //             dispatch(fetchArticleById(id));
        //         });

        useEffect(() => {
            if (__PROJECT__ !== 'storybook') {
                dispatch(fetchArticleById(id));
            }
        }, [dispatch, id]);

        let content;

        if (isLoading) {
            content = (
                <VStack gap='8'>
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
                </VStack>
            );
        } else if (error) {
            content = (
                <Text title={t('Error Occured')} align={TextAlign.CENTER} />
            );
        } else {
            content = (
                <>
                    <HStack max justify='center' className={cls.avatarWrapper}>
                        <Avatar
                            alt='avatar'
                            src={article?.img}
                            className={cls.avatar}
                            size={200}
                        />
                    </HStack>
                    <VStack max gap='4'>
                        <Text
                            className={cls.title}
                            title={article?.title}
                            text={article?.subtitle}
                            size={TextSize.L}
                        />

                        <HStack gap='8' className={cls.articleInfo}>
                            <Icon Svg={eyeIcon} className={cls.icon} />
                            <Text text={String(article?.views)} />
                        </HStack>
                        <HStack gap='8' className={cls.articleInfo}>
                            <Icon Svg={calendarIcon} className={cls.icon} />
                            <Text text={article?.createdAt} />
                        </HStack>
                    </VStack>
                    {article?.blocks.map(renderBlock)}
                </>
            );
        }
        return (
            <DynamicModuleLoader
                name={'articleDetails'}
                reducers={reducers}
                removeAfterUnmount
            >
                <VStack
                    gap='16'
                    max
                    className={classNames(cls.ArticleDetails, {}, [className])}
                >
                    {content}
                </VStack>
            </DynamicModuleLoader>
        );
    }
);

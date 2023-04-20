import { FC, memo } from 'react';
import { Text } from 'shared/ui/Text/ui/Text';
import { classNames } from 'shared/lib/classnames/classNames';
import cls from './CommentList.module.scss';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = memo(
    (props: CommentListProps) => {
        const { className, comments, isLoading } = props;
        const { t } = useTranslation('article');

        if (isLoading) {
            return (
                <div className={classNames(cls.CommentList, {}, [className])}>
                    <CommentCard isLoading />
                    <CommentCard isLoading />
                    <CommentCard isLoading />
                </div>
            );
        }
        return (
            // eslint-disable-next-line i18next/no-literal-string
            <div className={classNames(cls.commentList, {}, [className])}>
                {comments?.length ? (
                    comments.map((comment) => (
                        <CommentCard
                            key={comment.id}
                            className={cls.comment}
                            comment={comment}
                        />
                    ))
                ) : (
                    <Text text={t('no comments yet')} />
                )}
            </div>
        );
    }
);

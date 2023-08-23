import { FC, memo } from 'react';
import { Text } from '@/shared/ui/Text/ui/Text';
import { classNames } from '@/shared/lib/classnames/classNames';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';
import { VStack } from '@/shared/ui/Stack';

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
                <VStack
                    gap='16'
                    max
                    className={classNames('', {}, [className])}
                >
                    <CommentCard isLoading />
                    <CommentCard isLoading />
                    <CommentCard isLoading />
                </VStack>
            );
        }

        return (
            <VStack max gap='16' className={classNames('', {}, [className])}>
                {comments?.length ? (
                    comments.map((comment) => (
                        <CommentCard key={comment.id} comment={comment} />
                    ))
                ) : (
                    <Text text={t('no comments yet')} />
                )}
            </VStack>
        );
    }
);

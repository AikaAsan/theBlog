/* eslint-disable i18next/no-literal-string */
import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classnames/classNames';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { VStack } from 'shared/ui/Stack';
interface CommentCardProps {
    className?: string;
    comment?: Comment;

    isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = memo(
    (props: CommentCardProps) => {
        const { className, comment, isLoading } = props;

        if (isLoading) {
            return (
                <VStack
                    max
                    className={classNames(cls.commentCard, {}, [className])}
                >
                    <div className={cls.header}>
                        <Skeleton border='50%' width={30} height={30} />
                        <Skeleton
                            width={100}
                            height={16}
                            className={cls.username}
                        />
                    </div>
                    <div>
                        <Skeleton
                            width='100%'
                            height={50}
                            className={cls.text}
                        />
                    </div>
                </VStack>
            );
        }
        return (
            <VStack
                max
                gap='8'
                className={classNames(cls.commentCard, {}, [className])}
            >
                <AppLink
                    className={cls.header}
                    to={`${RoutePath.profile}${comment?.user.id}`}
                >
                    {comment?.user.avatar ? (
                        <Avatar
                            size={30}
                            alt={`avatar`}
                            src={comment?.user.avatar}
                        />
                    ) : null}
                    <Text
                        title={comment?.user.username}
                        className={cls.username}
                    />
                </AppLink>
                <Text text={comment?.text} className={cls.text} />
            </VStack>
        );
    }
);

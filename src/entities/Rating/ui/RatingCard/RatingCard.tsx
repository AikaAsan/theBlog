import { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classnames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/ui/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/ui/Button';
import { Input } from '@/shared/ui/Input/Input';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard: FC<RatingCardProps> = memo(
    (props: RatingCardProps) => {
        const {
            className,
            title,
            feedbackTitle,
            hasFeedback,
            onAccept,
            onCancel,
            rate = 0,
        } = props;
        const { t } = useTranslation('article');
        const isMobile = useDevice();

        const [isModalOpen, setIsModalOpen] = useState(false);
        const [starsCount, setStarsCount] = useState(rate);
        const [feedback, setFeedback] = useState('');

        console.log('feedback', feedback);

        const onSelectStars = useCallback(
            (selectedStarsCount: number) => {
                setStarsCount(selectedStarsCount);
                if (hasFeedback) {
                    setIsModalOpen(true);
                } else {
                    onAccept?.(selectedStarsCount);
                }
            },
            [hasFeedback, onAccept]
        );

        const acceptHandler = useCallback(() => {
            setIsModalOpen(false);
            onAccept?.(starsCount, feedback);
        }, [feedback, onAccept, starsCount]);

        const cancelHandler = useCallback(() => {
            setIsModalOpen(false);
            onCancel?.(starsCount);
        }, [onCancel, starsCount]);

        const modalContent = (
            <>
                <Text title={feedbackTitle} />
                <Input
                    placeholder={t('Your Feedback')}
                    value={feedback}
                    onChange={setFeedback}
                />
            </>
        );
        return (
            <Card className={classNames('', {}, [className])} max>
                <VStack align={`center`} gap={`8`} max>
                    <Text
                        title={
                            starsCount
                                ? t('thank you for rating the article')
                                : title
                        }
                    />
                    <StarRating
                        size={40}
                        onSelect={onSelectStars}
                        selectedStars={starsCount}
                    />
                </VStack>
                {!isMobile ? (
                    <Modal isOpen={isModalOpen} lazy>
                        <VStack max gap='32'>
                            {modalContent}
                            <HStack max gap='16' justify='end'>
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={cancelHandler}
                                >
                                    {t('Close')}
                                </Button>
                                <Button onClick={acceptHandler}>
                                    {t('Send')}
                                </Button>
                            </HStack>
                        </VStack>
                    </Modal>
                ) : (
                    <>
                        <Drawer
                            isOpen={isModalOpen}
                            lazy
                            onClose={cancelHandler}
                        >
                            <VStack gap='32'>
                                {modalContent}
                                <Button
                                    fullWidth
                                    onClick={acceptHandler}
                                    size={ButtonSize.L}
                                >
                                    {t('Send')}
                                </Button>
                            </VStack>
                        </Drawer>
                    </>
                )}
            </Card>
        );
    }
);

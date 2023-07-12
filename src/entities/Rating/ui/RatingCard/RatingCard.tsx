import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/deprecated/Text';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Input } from '@/shared/ui/deprecated/Input';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/redesigned/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        onAccept,
        feedbackTitle,
        hasFeedback,
        onCancel,
        title,
        rate = 0,
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [starsCount, setStarsCount] = useState<number>(rate);
    const [feedback, setFeedback] = useState<string>('');

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <VStack
            max
            gap="32"
            align="normal"
        >
            <Text title={feedbackTitle} />
            <Input
                placeholder={t('Ваш відгук')}
                value={feedback}
                onChange={setFeedback}
                autofocus
                data-testid="RatingCard.Input"
            />
            <HStack
                max
                gap="16"
                justify="end"
            >
                <Button
                    onClick={cancelHandle}
                    theme={ButtonTheme.OUTLINE_RED}
                    data-testid="RatingCard.Close"
                >
                    {t('Закрити')}
                </Button>
                <Button
                    onClick={acceptHandle}
                    data-testid="RatingCard.Send"
                >
                    {t('Відпрати')}
                </Button>
            </HStack>
        </VStack>
    );

    return (
        <Card
            max
            className={classNames('', {}, [className])}
            data-testid="RatingCard"
        >
            <VStack
                align="center"
                gap="8"
                max
            >
                <Text title={starsCount ? t('Дякую за оцінку!') : title} />
                <StarRating
                    selectedStars={starsCount}
                    size={40}
                    onSelect={onSelectStars}
                />
            </VStack>
            <BrowserView>
                <Modal
                    isOpen={isModalOpen}
                    lazy
                    onClose={cancelHandle}
                >
                    {modalContent}
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer
                    isOpen={isModalOpen}
                    lazy
                    onClose={cancelHandle}
                >
                    {modalContent}
                </Drawer>
            </MobileView>
        </Card>
    );
});

import { useTranslation } from 'react-i18next';
import { classNames, Modes } from '@/shared/lib/classnames/classNames';
import cls from './ProfileCard.module.scss';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/ui/Text';
import { Input } from '@/shared/ui/Input/Input';
import { Profile } from '../../index';
import { Loader } from '@/shared/ui/Loader';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        onChangeFirstname,
        onChangeLastname,
        onChangeCity,
        onChangeUsername,
        onChangeCurrency,
        onChangeAvatar,
        onChangeCountry,
        readonly,
    } = props;

    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <HStack
                justify='center'
                max
                className={classNames(
                    cls.ProfileCard,
                    { [cls.loading]: true },
                    [className]
                )}
            >
                <Loader />
            </HStack>
        );
    }
    if (error) {
        return (
            <HStack
                justify='center'
                max
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.error,
                ])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Error Occured')}
                    text={t('Try to reload the page')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const modes: Modes = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack
            gap='8'
            max
            className={classNames(cls.ProfileCard, modes, [className])}
        >
            {data?.avatar && (
                <HStack justify='center' max className={cls.avatarWrapper}>
                    <Avatar src={data?.avatar} alt={`avatar`} />
                </HStack>
            )}

            <Input
                value={data?.first}
                placeholder={t('Your name')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid='ProfileCard.firstname'
            />
            <Input
                value={data?.lastname}
                placeholder={t('Your Last Name')}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid='ProfileCard.lastname'
            />

            <Input
                value={data?.city}
                placeholder={t('City')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                placeholder={t('Username')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <Input
                value={data?.avatar}
                placeholder={t('Provide link to the avatar')}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                className={cls.input}
                readonly={readonly}
                value={data?.currency}
                onChange={onChangeCurrency}
            />
            <CountrySelect
                className={cls.input}
                readonly={readonly}
                value={data?.country}
                onChange={onChangeCountry}
            />
        </VStack>
    );
};

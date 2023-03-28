import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classnames/classNames';
import cls from './ProfileCard.module.scss';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/ui/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile';
import { Loader } from 'shared/ui/Loader';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { className, data, error, isLoading } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <Loader />
            </div>
        );
    }
    if (error) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.error,
                ])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t('error occured')}
                    text={t('try ro reload the page')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Profile')} />
                <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
                    {t('Edit')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Your name')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Your Last Name')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};

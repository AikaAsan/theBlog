import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classnames/classNames';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            {t('Profile Page')}
        </div>
    );
};

export default ProfilePage;

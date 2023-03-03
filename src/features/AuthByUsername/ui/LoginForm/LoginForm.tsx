import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                className={cls.input}
                type='text'
                placeholder={t('username')}
                autofocus={true}
            />
            <Input
                className={cls.input}
                type='text'
                placeholder={t('password')}
        
            />
            <Button className={cls.loginBtn}>{t('Login')}</Button>
        </div>
    );
};

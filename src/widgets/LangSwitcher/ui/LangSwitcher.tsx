import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classnames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/ui/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
    };
    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={toggle}
            theme={ThemeButton.CLEAR}
        >
            {t('lang')}
        </Button>
    );
};

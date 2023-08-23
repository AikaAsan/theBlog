import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classnames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/ui/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
    };
    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={toggle}
            theme={ButtonTheme.CLEAR}
        >
            {t(short ? 'abbreviation' : 'lang')}
        </Button>
    );
});

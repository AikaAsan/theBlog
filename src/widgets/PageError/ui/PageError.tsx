import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classnames/classNames';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };
    return (
        <div className={classNames(cls.PageError)}>
            <p>{t('Oops something went wrong')}</p>
            <button onClick={reloadPage}>{t('Reload Page')}</button>
        </div>
    );
};

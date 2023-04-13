import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classnames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> =
    memo((props) => {
        // const { className } = props;
        const { t } = useTranslation();

        return (
            <div
                className={classNames(cls.articleImageBlockComponent, {}, [
                    // className,
                ])}
                // eslint-disable-next-line i18next/no-literal-string
            >
                ArticleImageBlockComponent
            </div>
        );
    });

import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classnames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = memo((
    props
) => {
 
    const { t } = useTranslation();

    return (
        <div
            className={classNames(cls.articleCodeBlockComponent, {}, [
          
            ])}
            // eslint-disable-next-line i18next/no-literal-string
        >
            ArticleCodeBlockComponent
        </div>
    );
});



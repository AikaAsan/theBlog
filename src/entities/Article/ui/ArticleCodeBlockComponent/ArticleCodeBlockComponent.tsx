import { ArticleCodeBlock } from '../../model/types/article';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classnames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';
import { Code } from 'shared/ui/Code/Code';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> =
    memo((props: ArticleCodeBlockComponentProps) => {
        const { t } = useTranslation();
        const { className, block } = props;
        return (
            <div
                className={classNames(cls.articleCodeBlockComponent, {}, [
                    className,
                ])}
            >
                <Code text={block.code} />
            </div>
        );
    });

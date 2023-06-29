/* eslint-disable i18next/no-literal-string */
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classnames/classNames';
import { Page } from 'shared/ui/Page/Page';
import { useParams } from 'react-router-dom';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = memo(
    (props: ArticleEditPageProps) => {
        const { className } = props;
        const { t } = useTranslation('article');
        const { id } = useParams<{ id: string }>();
        const isEdit = Boolean(id);

        return (
            <Page className={classNames('', {}, [className])}>
                {isEdit ? t('edit article') : t('create new article')}
            </Page>
        );
    }
);

export default ArticleEditPage;

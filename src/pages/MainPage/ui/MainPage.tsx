import { BugButton } from 'app/providers/ErrorBoundary';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const MainPage = memo(() => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');
    const onChangeHandler = (val: string) => {
        setValue(val);
    };
    return (
        <Page>
            {/* <BugButton />  */}
            {t('MAIN PAGE')}
        </Page>
    );
});

export default MainPage;

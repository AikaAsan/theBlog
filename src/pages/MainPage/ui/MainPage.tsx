import { BugButton } from 'app/providers/ErrorBoundary';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = memo(() => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');
    const onChangeHandler = (val: string) => {
        setValue(val);
    };
    return (
        <div>
            {/* <BugButton />  */}
            {t('MAIN PAGE')}
        </div>
    );
});

export default MainPage;

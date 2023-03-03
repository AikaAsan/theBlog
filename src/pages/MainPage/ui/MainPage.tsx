import { BugButton } from 'app/providers/ErrorBoundary';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');
    const onChangeHandler = (val: string) => {
        setValue(val);
    };
    return (
        <div>
            <BugButton />
            {t('MAIN PAGE')}
        </div>
    );
};

export default MainPage;

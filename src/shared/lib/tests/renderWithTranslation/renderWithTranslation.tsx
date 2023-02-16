import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nforTests from 'shared/config/i18n/i18nforTests';

export function renderWithTranslation(component: ReactNode) {
    return render(
        <I18nextProvider i18n={i18nforTests}>{component}</I18nextProvider>
    );
}

import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import type { StateSchema } from '@/app/providers/StoreProvider';
import { StoreProvider } from '@/app/providers/StoreProvider';
import i18nForTests from '@/shared/config/i18n/i18nForTests';
import type { ReducersList } from '@/shared/lib/components';

export interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: ReducersList;
}

export const componentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => {
    const { route = '/', initialState, asyncReducers } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
                <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
};

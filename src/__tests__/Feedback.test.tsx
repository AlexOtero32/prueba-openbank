import React from 'react';
import {
    renderWithStore,
    render,
    fireEvent,
    cleanup,
    screen,
} from '../lib/test-utils';

import { Provider } from 'react-redux';

import Feedback from '../views/Feedback/index';
import createMockStore from 'redux-mock-store';
import { DisplayingScreen } from '../redux/ui/types';
import { exitWizard } from '../redux/ui/actions';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}));

describe('<Feedback />', () => {
    let store: any;
    const mockStore = createMockStore([]);

    let initialState = {};

    beforeEach(() => {
        initialState = {
            ui: {
                isWizardOpen: false,
                screen: DisplayingScreen.Feedback,
                submitting: false,
                success: true,
            },
        };
        store = mockStore(initialState);
    });

    afterEach(() => {
        cleanup();
    });

    test('Muestra la pantalla de "Success" si success es true', () => {
        renderWithStore(<Feedback />, { initialState });

        expect(
            screen.getByText('passwordManagerCreatedDescription')
        ).toBeTruthy();
    });

    test('Muestra la pantalla de "Error" si success es false', () => {
        renderWithStore(<Feedback />, {
            initialState: { ...initialState, ui: { success: false } },
        });

        expect(screen.getByText('creationErrorDescription')).toBeTruthy();
    });

    test('El botón de salir cierra el wizard', async () => {
        store.dispatch = jest.fn();

        const { findByText } = render(
            <Provider store={store}>
                <Feedback />
            </Provider>
        );

        const exitButton = await findByText('access');

        fireEvent.click(exitButton);

        expect(store.dispatch).toHaveBeenCalledWith(exitWizard());
    });
});

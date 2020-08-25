import React from 'react';
import {
    renderWithStore,
    fireEvent,
    cleanup,
    screen,
    getByTestId,
} from '../lib/test-utils';
import { RootState } from '../redux/store';
import { DisplayingScreen } from '../redux/ui/types';

import ProductInformation from '../views/ProductInformation/index';

import '@testing-library/jest-dom/extend-expect';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}));

describe('<ProductInformation />', () => {
    const initialState: RootState = {
        ui: {
            isWizardOpen: false,
            screen: DisplayingScreen.ProductInformation,
            submitting: false,
            success: true,
        },
    };

    afterEach(() => {
        cleanup();
    });

    it('No permite avanzar sin aceptar las condiciones', () => {
        renderWithStore(<ProductInformation />, { initialState });

        // Botón de siguiente
        expect(screen.getByText('next')).toHaveAttribute('disabled', '');

        // Aceptamos las condiciones
        fireEvent.click(screen.getByTestId('accept-checkbox'));

        // Ahora no está deshabilitado
        expect(screen.getByText('next')).not.toHaveAttribute('disabled', '');
    });
});

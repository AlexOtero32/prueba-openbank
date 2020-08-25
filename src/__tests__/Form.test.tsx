import React from 'react';
import { renderWithStore, fireEvent, cleanup, screen } from '../lib/test-utils';
import { RootState } from '../redux/store';
import { DisplayingScreen } from '../redux/ui/types';

import '@testing-library/jest-dom/extend-expect';

import Form from '../views/Form/index';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}));

describe('<Form />', () => {
    const initialState: RootState = {
        ui: {
            isWizardOpen: false,
            screen: DisplayingScreen.Form,
            submitting: false,
            success: true,
        },
    };

    afterEach(() => {
        cleanup();
    });

    it('Permite enviar si las contraseñas son correctas', () => {
        renderWithStore(<Form />, { ...initialState });

        expect(screen.getByText('next')).toHaveAttribute('disabled', '');

        const passwordInput = screen.getByTestId('password');
        const passwordRepeatInput = screen.getByTestId('repeat-password');

        fireEvent.change(passwordInput, { target: { value: 'TestPassword1' } });
        fireEvent.change(passwordRepeatInput, {
            target: { value: 'TestPassword1' },
        });

        expect(screen.getByText('next')).not.toHaveAttribute('disabled', '');
    });

    it('No permite enviar si las contraseñas no son válidas', () => {
        renderWithStore(<Form />, { ...initialState });

        const passwordInput = screen.getByTestId('password');
        const passwordRepeatInput = screen.getByTestId('repeat-password');

        // Contraseñas no válidas
        fireEvent.change(passwordInput, { target: { value: 'TestPassword' } });
        fireEvent.change(passwordRepeatInput, {
            target: { value: 'TestPassword' },
        });

        expect(screen.getByText('next')).toHaveAttribute('disabled', '');
    });

    it('No permite enviar si las contraseñas no son iguales', () => {
        renderWithStore(<Form />, { ...initialState });

        const passwordInput = screen.getByTestId('password');
        const passwordRepeatInput = screen.getByTestId('repeat-password');

        // Contraseñas desiguales
        fireEvent.change(passwordInput, { target: { value: 'TestPassword1' } });
        fireEvent.change(passwordRepeatInput, {
            target: { value: 'TestPassword2' },
        });

        expect(screen.getByText('next')).toHaveAttribute('disabled', '');
    });
});

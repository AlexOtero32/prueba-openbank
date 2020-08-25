export enum DisplayingScreen {
    ProductInformation,
    Form,
    Feedback,
}

// Estado de UI
export interface UIState {
    screen: DisplayingScreen;
    isWizardOpen: boolean;
    success: boolean;
    submitting: boolean;
}

// Tipos de acciones
export const CHANGE_SCREEN = 'change_screen';
export const EXIT_WIZARD = 'exit_wizard';
export const OPEN_WIZARD = 'open_wizard';
export const SEND_PASSWORD = 'send_password';
export const SET_SUBMITTING = 'set_submitting';

// Acciones
interface ChangeScreenAction {
    type: typeof CHANGE_SCREEN;
    payload: DisplayingScreen;
}

interface ExitWizardAction {
    type: typeof EXIT_WIZARD;
}

interface OpenWizardAction {
    type: typeof OPEN_WIZARD;
}

interface SendPasswordAction {
    type: typeof SEND_PASSWORD;
    payload: boolean;
}

interface SetSubmittingAction {
    type: typeof SET_SUBMITTING;
    payload: boolean;
}

export type UIActionTypes =
    | ChangeScreenAction
    | ExitWizardAction
    | OpenWizardAction
    | SendPasswordAction
    | SetSubmittingAction;

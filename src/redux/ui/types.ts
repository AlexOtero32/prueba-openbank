export enum DisplayingScreen {
    ProductInformation,
    Form,
    Feedback,
}

// Estado de UI
export interface UIState {
    screen: DisplayingScreen;
    isWizardOpen: boolean;
}

// Tipos de acciones
export const CHANGE_SCREEN = 'change_screen';
export const EXIT_WIZARD = 'exit_wizard';
export const OPEN_WIZARD = 'open_wizard';

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

export type UIActionTypes =
    | ChangeScreenAction
    | ExitWizardAction
    | OpenWizardAction;

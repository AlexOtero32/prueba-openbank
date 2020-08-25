import {
    UIState,
    DisplayingScreen,
    UIActionTypes,
    CHANGE_SCREEN,
    EXIT_WIZARD,
    OPEN_WIZARD,
    SEND_PASSWORD,
    SET_SUBMITTING,
} from './types';

const initialState: UIState = {
    screen: DisplayingScreen.ProductInformation,
    isWizardOpen: false,
    success: true,
    submitting: false,
};

export default (state = initialState, action: UIActionTypes): UIState => {
    switch (action.type) {
        case CHANGE_SCREEN:
            return { ...state, screen: action.payload };
        case EXIT_WIZARD:
            return {
                ...state,
                screen: DisplayingScreen.ProductInformation,
                isWizardOpen: false,
            };
        case OPEN_WIZARD:
            return { ...state, isWizardOpen: true };
        case SEND_PASSWORD:
            return { ...state, success: action.payload };
        case SET_SUBMITTING:
            return { ...state, submitting: action.payload };
        default:
            return state;
    }
};

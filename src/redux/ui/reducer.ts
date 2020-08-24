import {
    UIState,
    DisplayingScreen,
    UIActionTypes,
    CHANGE_SCREEN,
    EXIT_WIZARD,
    OPEN_WIZARD,
} from './types';

const initialState: UIState = {
    screen: DisplayingScreen.ProductInformation,
    isWizardOpen: false,
};

export default (state = initialState, action: UIActionTypes): UIState => {
    switch (action.type) {
        case CHANGE_SCREEN:
            return { ...state, screen: action.payload };
        case EXIT_WIZARD:
            return {
                screen: DisplayingScreen.ProductInformation,
                isWizardOpen: false,
            };
        case OPEN_WIZARD:
            return { ...state, isWizardOpen: true };
        default:
            return state;
    }
};

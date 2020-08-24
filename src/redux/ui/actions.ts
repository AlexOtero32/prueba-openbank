import {
    DisplayingScreen,
    CHANGE_SCREEN,
    EXIT_WIZARD,
    UIActionTypes,
    OPEN_WIZARD,
} from './types';

export function changeScreen(screen: DisplayingScreen): UIActionTypes {
    return {
        type: CHANGE_SCREEN,
        payload: screen,
    };
}

export function exitWizard(): UIActionTypes {
    return { type: EXIT_WIZARD };
}

export function openWizard(): UIActionTypes {
    return { type: OPEN_WIZARD };
}

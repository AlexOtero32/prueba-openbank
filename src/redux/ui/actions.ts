import {
    DisplayingScreen,
    CHANGE_SCREEN,
    EXIT_WIZARD,
    UIActionTypes,
    OPEN_WIZARD,
    SEND_PASSWORD,
    SET_SUBMITTING,
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

export function sendPassword(success: boolean): UIActionTypes {
    return { type: SEND_PASSWORD, payload: success };
}

export function setSubmitting(submitting: boolean): UIActionTypes {
    return { type: SET_SUBMITTING, payload: submitting };
}

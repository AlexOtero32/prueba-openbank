import { Action } from 'redux';
import { sendPassword, setSubmitting, changeScreen } from './actions';
import { RootState } from '../store';
import { ThunkAction } from 'redux-thunk';
import { submitForm } from '../../services/api';
import { DisplayingScreen } from './types';

export const sendPasswordThunk = (values: {
    masterPassword: string;
    repeatMasterPassword: string;
    hint?: string;
}): ThunkAction<
    void,
    RootState,
    unknown,
    Action<string>
> => async dispatchEvent => {
    try {
        dispatchEvent(setSubmitting(true));

        await submitForm(
            values.masterPassword,
            values.repeatMasterPassword,
            values.hint
        );

        dispatchEvent(sendPassword(true));
    } catch {
        dispatchEvent(sendPassword(false));
    } finally {
        dispatchEvent(setSubmitting(false));
        dispatchEvent(changeScreen(DisplayingScreen.Feedback));
    }
};

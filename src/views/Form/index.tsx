import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect, ConnectedProps } from 'react-redux';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

import WizardHeader from '../../components/wizard/WizardHeader';
import WizardBody from '../../components/wizard/WizardBody';
import WizardFooter from '../../components/wizard/WizardFooter';
import Button from '../../components/common/Button';
import FormInput from '../../components/common/FormInput';
import IconButton from '../../components/common/IconButton';

import { Form, Field } from 'react-final-form';

import { exitWizard } from '../../redux/ui/actions';
import { sendPasswordThunk } from '../../redux/ui/thunks';
import { validatePassword } from '../../lib/helpers';
import { TFunction } from 'i18next';
import { RootState } from '../../redux/store';

const FormScreen: React.FC<FormScreenProps> = props => {
    const { t } = useTranslation('wizard');

    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <Form
            onSubmit={values => {
                props.submit(values);
            }}
            validate={validatePassword}
            render={({ handleSubmit, pristine, values, errors }) => (
                <form onSubmit={handleSubmit}>
                    <WizardHeader />
                    <WizardBody>
                        <h1 className="title">{t('createPasswordManager')}</h1>
                        <p>{t('descriptionCreatePassword')}</p>
                        <div className="form-row sm:flex-row">
                            <div className="form-input-group sm:mr-4">
                                <label htmlFor="masterPassword">
                                    {t('masterPassword')}
                                </label>
                                <div className="form-input">
                                    <Field<string>
                                        name="masterPassword"
                                        component={FormInput}
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        minLength={8}
                                        maxLength={24}
                                        className="w-full"
                                    />
                                    {renderVisibilityButton(
                                        showPassword,
                                        setShowPassword
                                    )}
                                </div>
                                {!pristine &&
                                    renderError(
                                        values.masterPassword,
                                        errors.masterPassword,
                                        t
                                    )}
                            </div>
                            <div className="form-input-group">
                                <label htmlFor="repeatMasterPassword">
                                    {t('repeatMasterPassword')}
                                </label>
                                <div className="form-input">
                                    <Field<string>
                                        name="repeatMasterPassword"
                                        component={FormInput}
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        minLength={8}
                                        maxLength={24}
                                        className="w-full"
                                    />
                                    {renderVisibilityButton(
                                        showPassword,
                                        setShowPassword
                                    )}
                                </div>
                                {!pristine &&
                                    renderError(
                                        values.repeatMasterPassword,
                                        errors.repeatMasterPassword,
                                        t
                                    )}
                            </div>
                        </div>
                        <p>{t('descriptionCreateHint')}</p>
                        <div className="form-row">
                            <div className="form-input-group">
                                <label htmlFor="hint">{t('createHint')}</label>
                                <div className="form-input">
                                    <Field<string>
                                        name="hint"
                                        component={FormInput}
                                        type="text"
                                        className="w-full"
                                        maxLength={255}
                                    />
                                </div>
                                {renderCharactersRemaining(values.hint)}
                            </div>
                        </div>
                    </WizardBody>
                    <WizardFooter>
                        <Button
                            buttonStyle="cancel"
                            text={t('cancel')}
                            onClick={props.exitWizard}
                        />
                        <Button
                            buttonStyle="next"
                            text={t('next')}
                            type="submit"
                            disabled={
                                pristine ||
                                props.submitting ||
                                Object.keys(errors).length > 0
                            }
                        />
                    </WizardFooter>
                </form>
            )}
        />
    );
};

function renderVisibilityButton(
    showPassword: boolean,
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>
) {
    return (
        <IconButton
            icon={showPassword ? <FaEyeSlash /> : <FaEye />}
            onClick={() => setShowPassword(!showPassword)}
        />
    );
}

function renderCharactersRemaining(value: string): JSX.Element {
    return <span className="self-end">{value ? value.length : 0}/255</span>;
}

function renderError(
    value: string,
    error: string,
    t: TFunction
): JSX.Element | null {
    if (!!value && error)
        return <p className="text-sm text-primary">{t(error)}</p>;
    return null;
}

const mapDispatchToProps = (dispatchEvent: any) => ({
    submit: (values: {
        masterPassword: string;
        repeatMasterPassword: string;
        hint: string;
    }) => dispatchEvent(sendPasswordThunk(values)),
    exitWizard: () => dispatchEvent(exitWizard()),
});

const mapStateToProps = (state: RootState) => ({
    submitting: state.ui.submitting,
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type FormScreenProps = ConnectedProps<typeof connector>;

export default connector(FormScreen);

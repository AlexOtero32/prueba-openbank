import React from 'react';
import { useTranslation } from 'react-i18next';

import WizardHeader from '../../components/wizard/WizardHeader';
import WizardBody from '../../components/wizard/WizardBody';
import WizardFooter from '../../components/wizard/WizardFooter';
import Button from '../../components/common/Button';
import FormInput from '../../components/common/FormInput';
import IconButton from '../../components/common/IconButton';

import { Form, Field } from 'react-final-form';

import { changeScreen, exitWizard } from '../../redux/ui/actions';
import { DisplayingScreen } from '../../redux/ui/types';
import { connect, ConnectedProps } from 'react-redux';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

const FormScreen: React.FC<FormScreenProps> = props => {
    const { t } = useTranslation('wizard');

    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <>
            <Form
                onSubmit={() => {}}
                render={({ handleSubmit, submitting, pristine, values }) => (
                    <>
                        <WizardHeader />
                        <WizardBody>
                            <h1 className="title">
                                {t('createPasswordManager')}
                            </h1>
                            <p>{t('descriptionCreatePassword')}</p>
                            <form onSubmit={handleSubmit}>
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
                                                    showPassword
                                                        ? 'text'
                                                        : 'password'
                                                }
                                                className="w-full"
                                            />
                                            {renderVisibilityButton(
                                                showPassword,
                                                setShowPassword
                                            )}
                                        </div>
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
                                                    showPassword
                                                        ? 'text'
                                                        : 'password'
                                                }
                                                className="w-full"
                                            />
                                            {renderVisibilityButton(
                                                showPassword,
                                                setShowPassword
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <p>{t('descriptionCreateHint')}</p>
                                <div className="form-row">
                                    <div className="form-input-group">
                                        <label htmlFor="hint">
                                            {t('createHint')}
                                        </label>
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
                            </form>
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
                                onClick={props.goToNextPage}
                                disabled={pristine || submitting}
                            />
                        </WizardFooter>
                    </>
                )}
            />
        </>
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

const mapDispatchToProps = (dispatchEvent: any) => ({
    goToNextPage: () => dispatchEvent(changeScreen(DisplayingScreen.Feedback)),
    exitWizard: () => dispatchEvent(exitWizard()),
});

const connector = connect(null, mapDispatchToProps);

type FormScreenProps = ConnectedProps<typeof connector>;

export default connector(FormScreen);

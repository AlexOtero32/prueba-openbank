import React from 'react';
import { useTranslation } from 'react-i18next';

import WizardHeader from '../../components/wizard/WizardHeader';
import WizardBody from '../../components/wizard/WizardBody';
import WizardFooter from '../../components/wizard/WizardFooter';
import Button from '../../components/common/Button';

import { changeScreen, exitWizard } from '../../redux/ui/actions';
import { DisplayingScreen } from '../../redux/ui/types';
import { connect, ConnectedProps } from 'react-redux';

const FormScreen: React.FC<FormScreenProps> = props => {
    const { t } = useTranslation('wizard');

    return (
        <>
            <WizardHeader />
            <WizardBody>
                <h1 className="title">{t('createPasswordManager')}</h1>
                <p>{t('descriptionCreatePassword')}</p>
                <form>
                    <div className="form-row sm:flex-row">
                        <div className="form-input-group sm:w-1/3 sm:mr-4">
                            <label htmlFor="masterPassword">
                                {t('masterPassword')}
                            </label>
                            <div className="form-input">
                                <input
                                    className="w-full"
                                    type="password"
                                    name="masterPassword"
                                ></input>
                            </div>
                        </div>
                        <div className="form-input-group sm:w-1/3">
                            <label htmlFor="repeatMasterPassword">
                                {t('repeatMasterPassword')}
                            </label>
                            <div className="form-input">
                                <input
                                    className="w-full"
                                    type="password"
                                    name="repeatMasterPassword"
                                ></input>
                            </div>
                        </div>
                    </div>
                    <p>{t('descriptionCreateHint')}</p>
                    <div className="form-row">
                        <div className="form-input-group">
                            <label htmlFor="hint">{t('createHint')}</label>
                            <div className="form-input">
                                <input
                                    className="w-full"
                                    type="text"
                                    name="hint"
                                    maxLength={255}
                                ></input>
                            </div>
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
                />
            </WizardFooter>
        </>
    );
};

const mapDispatchToProps = (dispatchEvent: any) => ({
    goToNextPage: () => dispatchEvent(changeScreen(DisplayingScreen.Feedback)),
    exitWizard: () => dispatchEvent(exitWizard()),
});

const connector = connect(null, mapDispatchToProps);

type FormScreenProps = ConnectedProps<typeof connector>;

export default connector(FormScreen);

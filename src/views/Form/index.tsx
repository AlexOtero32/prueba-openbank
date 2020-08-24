import React from 'react';
import WizardHeader from '../../components/wizard/WizardHeader';
import WizardBody from '../../components/wizard/WizardBody';
import { useTranslation } from 'react-i18next';
import WizardFooter from '../../components/wizard/WizardFooter';
import Button from '../../components/common/Button';

const Step3: React.FC<{}> = () => {
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
                <Button buttonStyle="cancel" text="Cancelar" />
                <Button buttonStyle="next" text="Siguiente" disabled />
            </WizardFooter>
        </>
    );
};

export default Step3;

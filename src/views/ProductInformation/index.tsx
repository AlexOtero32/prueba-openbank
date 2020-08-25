import React from 'react';
import { useTranslation } from 'react-i18next';

import WizardHeader from '../../components/wizard/WizardHeader';
import WizardBody from '../../components/wizard/WizardBody';
import WizardFooter from '../../components/wizard/WizardFooter';

import Button from '../../components/common/Button';

import FirstImage from '../../assets/img/notes.jpg';
import SecondImage from '../../assets/img/padlock.jpg';
import { changeScreen, exitWizard } from '../../redux/ui/actions';
import { DisplayingScreen } from '../../redux/ui/types';
import { connect, ConnectedProps } from 'react-redux';

const ProductInformation: React.FC<ProductInfoProps> = props => {
    const { t } = useTranslation('wizard');

    return (
        <>
            <WizardHeader />
            <WizardBody>
                <h1 className="title">{t('createPasswordManager')}</h1>
                <div className="flex flex-col sm:flex-row">
                    <div className="image-container sm:mr-6">
                        <img src={FirstImage} alt={t('altFirstImage')} />
                        <p>{t('firstImage')}</p>
                    </div>
                    <div className="image-container sm:ml-6">
                        <img src={SecondImage} alt={t('altSecondImage')} />

                        <p>{t('secondImage')}</p>
                    </div>
                </div>
                <h3 className="font-bold">{t('howItWorks')}</h3>
                <p className="mt-2 mb-4">{t('howItWorksExplanation')}</p>
                <h3 className="font-bold">{t('whatCanYouSave')}</h3>
                <p className="mt-2 mb-4">{t('whatCanYouSaveExplanation')}</p>
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
    goToNextPage: () => dispatchEvent(changeScreen(DisplayingScreen.Form)),
    exitWizard: () => dispatchEvent(exitWizard()),
});

const connector = connect(null, mapDispatchToProps);

type ProductInfoProps = ConnectedProps<typeof connector>;

export default connector(ProductInformation);

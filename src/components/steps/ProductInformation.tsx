import React from 'react';
import { useTranslation } from 'react-i18next';

import Wizard from '../wizard/Wizard';
import WizardHeader from '../wizard/WizardHeader';
import WizardBody from '../wizard/WizardBody';
import WizardFooter from '../wizard/WizardFooter';

import Button from '../common/Button';

import FirstImage from '../../assets/img/notes.jpg';
import SecondImage from '../../assets/img/padlock.jpg';

const ProductInformation: React.FC<{}> = () => {
    const { t } = useTranslation('productInfo');

    return (
        <>
            <WizardHeader />
            <WizardBody>
                <h1 className="title">{t('createPasswordManager')}</h1>
                <div className="flex">
                    <div className="image-container">
                        <img src={FirstImage} alt={t('altFirstImage')} />
                        <p>{t('firstImage')}</p>
                    </div>
                    <div className="image-container">
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
                <Button type="cancel" text="Cancelar" />
                <Button type="next" text="Siguiente" />
            </WizardFooter>
        </>
    );
};

export default ProductInformation;

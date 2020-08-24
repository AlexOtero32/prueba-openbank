import React from 'react';
import WizardHeader from '../../components/wizard/WizardHeader';
import WizardBody from '../../components/wizard/WizardBody';
import WizardFooter from '../../components/wizard/WizardFooter';
import Button from '../../components/common/Button';
import { useTranslation } from 'react-i18next';

import { FaExclamationCircle, FaCheckCircle } from 'react-icons/fa';

type FeedbackProps = {
    success: boolean;
};

const Feedback: React.FC<FeedbackProps> = props => {
    const { t } = useTranslation('wizard');

    return (
        <>
            <WizardHeader />
            <WizardBody>{props.success ? <Success /> : <Error />}</WizardBody>
            <WizardFooter>
                <Button
                    text={t(props.success ? 'access' : 'return')}
                    buttonStyle="finish"
                />
            </WizardFooter>
        </>
    );
};

const Error: React.FC = () => {
    const { t } = useTranslation('wizard');

    return (
        <>
            <div className="flex">
                <FaExclamationCircle size={30} className="mt-2 mr-2" />
                <h1 className="title">{t('creationErrorTitle')}</h1>
            </div>
            <p>{t('creationErrorDescription')}</p>
        </>
    );
};

const Success: React.FC = () => {
    const { t } = useTranslation('wizard');

    return (
        <>
            <div className="flex">
                <FaCheckCircle size={30} className="mt-2 mr-2" />
                <h1 className="title">{t('passwordManagerCreatedTitle')}</h1>
            </div>
            <p>{t('passwordManagerCreatedDescription')}</p>
        </>
    );
};

export default Feedback;

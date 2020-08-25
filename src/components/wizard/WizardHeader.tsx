import React from 'react';
import Stepper from '../common/Stepper';
import { DisplayingScreen } from '../../redux/ui/types';

const WizardHeader: React.FC<{}> = () => {
    return (
        <header className="wizard-header">
            <Stepper step={DisplayingScreen.ProductInformation} />
            <Stepper step={DisplayingScreen.Form} />
            <Stepper step={DisplayingScreen.Feedback} />
        </header>
    );
};

export default WizardHeader;

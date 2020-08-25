import React from 'react';
import Stepper from '../common/Stepper';

const WizardHeader: React.FC<{}> = () => {
    return (
        <header className="wizard-header">
            <Stepper step={1} current={false} completed={true} />
            <Stepper step={2} current={true} completed={false} />
            <Stepper step={3} current={false} completed={false} />
        </header>
    );
};

export default WizardHeader;

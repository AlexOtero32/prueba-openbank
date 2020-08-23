import React from 'react';
import Stepper from './Stepper';

const ModalHeader: React.FC<{}> = () => {
    return (
        <header className="modal-header">
            <Stepper step={1} current={false} completed={true} />
            <Stepper step={2} current={true} completed={false} />
            <Stepper step={3} current={false} completed={false} />
        </header>
    );
};

export default ModalHeader;

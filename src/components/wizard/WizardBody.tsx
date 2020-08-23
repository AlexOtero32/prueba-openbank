import React from 'react';

const WizardBody: React.FC<{}> = props => {
    return (
        <section className="modal-body lg:px-24 lg:py-8">
            {props.children}
        </section>
    );
};

export default WizardBody;

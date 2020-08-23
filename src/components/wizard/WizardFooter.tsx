import React from 'react';

const WizardFooter: React.FC<{}> = props => {
    const children = React.Children.count(props.children);

    return (
        <footer
            className={`wizard-footer lg:px-24 lg:py-8 ${
                children > 1 ? 'justify-between' : 'justify-end'
            }`}
        >
            {props.children}
        </footer>
    );
};

export default WizardFooter;

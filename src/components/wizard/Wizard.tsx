import React from 'react';

import ProductInformation from '../steps/ProductInformation';

const Wizard: React.FC<{}> = () => {
    return (
        <div className="wizard">
            <ProductInformation />
        </div>
    );
};

export default Wizard;

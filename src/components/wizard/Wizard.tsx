import React from 'react';

import ProductInformation from '../../views/ProductInformation/index';

const Wizard: React.FC<{}> = () => {
    return (
        <div className="wizard">
            <ProductInformation />
        </div>
    );
};

export default Wizard;

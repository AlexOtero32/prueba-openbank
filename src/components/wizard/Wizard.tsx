import React from 'react';

// import ProductInformation from '../../views/ProductInformation/index';
import Form from '../../views/Form/index';

const Wizard: React.FC<{}> = () => {
    return (
        <div className="wizard">
            {/* <ProductInformation /> */}
            <Form />
        </div>
    );
};

export default Wizard;

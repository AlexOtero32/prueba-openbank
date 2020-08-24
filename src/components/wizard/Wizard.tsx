import React from 'react';

// import ProductInformation from '../../views/ProductInformation/index';
// import Form from '../../views/Form/index';
import Feedback from '../../views/Feedback/index';

const Wizard: React.FC<{}> = () => {
    return (
        <div className="wizard">
            {/* <ProductInformation /> */}
            {/* <Form /> */}
            <Feedback success={false} />
        </div>
    );
};

export default Wizard;

import React from 'react';

import ProductInformation from '../../views/ProductInformation/index';
import Form from '../../views/Form/index';
import Feedback from '../../views/Feedback/index';

import { RootState } from '../../redux/store';
import { DisplayingScreen } from '../../redux/ui/types';
import { connect, ConnectedProps } from 'react-redux';

function renderScreen(screen: DisplayingScreen) {
    switch (screen) {
        case DisplayingScreen.ProductInformation:
            return <ProductInformation />;
        case DisplayingScreen.Form:
            return <Form />;
        case DisplayingScreen.Feedback:
            return <Feedback />;
    }
}

const Wizard: React.FC<WizardProps> = props => {
    return <div className="wizard">{renderScreen(props.screen)}</div>;
};

const mapStateToProps = (state: RootState) => ({
    screen: state.ui.screen,
});

const connector = connect(mapStateToProps);

type WizardProps = ConnectedProps<typeof connector>;

export default connector(Wizard);

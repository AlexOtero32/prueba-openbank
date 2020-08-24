import React from 'react';
import Button from '../components/common/Button';

import { openWizard } from '../redux/ui/actions';
import { connect, ConnectedProps } from 'react-redux';

const HomeScreen: React.FC<HomeScreenProps> = props => {
    return (
        <div className="container">
            <Button
                buttonStyle="next"
                text="Abrir"
                onClick={() => props.openWizard()}
            />
        </div>
    );
};

const mapDispatchToProps = (dispatchEvent: any) => ({
    openWizard: () => dispatchEvent(openWizard()),
});

const connector = connect(null, mapDispatchToProps);

type HomeScreenProps = ConnectedProps<typeof connector>;

export default connector(HomeScreen);

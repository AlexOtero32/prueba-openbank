import React, { Suspense } from 'react';

import Wizard from './components/wizard/Wizard';
import HomeScreen from './views/Homescreen';

import { RootState } from './redux/store';
import { connect, ConnectedProps } from 'react-redux';

const App: React.FC<AppProps> = props => {
    return (
        <Suspense fallback="loading">
            <header></header>
            <main className="wrapper">
                {props.isWizardOpen ? <Wizard /> : <HomeScreen />}
            </main>
        </Suspense>
    );
};

const mapStateToProps = (state: RootState) => ({
    isWizardOpen: state.ui.isWizardOpen,
});

const connector = connect(mapStateToProps);

type AppProps = ConnectedProps<typeof connector>;

export default connector(App);

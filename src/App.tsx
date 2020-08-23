import React, { Suspense } from 'react';

import Wizard from './components/wizard/Wizard';
import SecondStep from './components/steps/SecondStep';
import ThirdStep from './components/steps/ThirdStep';

const App: React.FC<{}> = () => {
    return (
        <Suspense fallback="loading">
            <main className="wrapper">
                <Wizard />
            </main>
        </Suspense>
    );
};

export default App;

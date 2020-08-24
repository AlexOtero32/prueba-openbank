import React, { Suspense } from 'react';

import Wizard from './components/wizard/Wizard';

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

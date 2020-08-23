import React, { Suspense } from 'react';

import Modal from './components/Modal';
import ModalHeader from './components/ModalHeader';
import ModalBody from './components/ModalBody';
import ProductInformation from './components/steps/ProductInformation';
import SecondStep from './components/steps/SecondStep';
import ThirdStep from './components/steps/ThirdStep';

const App: React.FC<{}> = () => {
    return (
        <Suspense fallback="loading">
            <main className="wrapper">
                <Modal>
                    <ModalHeader />
                    <ModalBody>
                        <ProductInformation />
                    </ModalBody>
                </Modal>
            </main>
        </Suspense>
    );
};

export default App;

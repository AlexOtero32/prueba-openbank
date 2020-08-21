import React from 'react';

import Modal from './components/Modal';
import ModalHeader from './components/ModalHeader';

const App: React.FC<{}> = () => {
    return (
        <main className="wrapper">
            <Modal>
                <>
                    <ModalHeader />
                    Hola
                </>
            </Modal>
        </main>
    );
};

export default App;

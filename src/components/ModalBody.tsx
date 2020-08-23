import React from 'react';

const ModalBody: React.FC<{}> = props => {
    return (
        <section className="modal-body lg:px-24 lg:py-8">
            {props.children}
        </section>
    );
};

export default ModalBody;

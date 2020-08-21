import React from 'react';

const Modal: React.FC<{}> = (props) => {
    return <div className="modal">{props.children}</div>;
};

export default Modal;

import React from 'react';

type IconButtonProps = {
    onClick: () => any;
    icon: any;
};

const IconButton: React.FC<IconButtonProps> = props => {
    return (
        <button onClick={props.onClick} className="fill-current">
            {props.icon}
        </button>
    );
};

export default IconButton;

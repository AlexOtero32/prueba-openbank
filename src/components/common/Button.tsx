import React from 'react';
import classnames from 'classnames';

interface ButtonProps {
    type: 'next' | 'cancel' | 'finish';
    text: string;
}

const Button: React.FC<ButtonProps> = props => {
    return (
        <button
            className={classnames({
                'button-cancel': props.type === 'cancel',
                'button-next': props.type === 'next',
                'button-finish': props.type === 'finish',
            })}
        >
            {props.text}
        </button>
    );
};

export default Button;

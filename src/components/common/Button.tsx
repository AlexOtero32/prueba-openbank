import React from 'react';
import classnames from 'classnames';

interface ButtonProps {
    type: 'next' | 'cancel' | 'finish';
    text: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = props => {
    return (
        <button
            className={classnames({
                'button-cancel': props.type === 'cancel',
                'button-next': props.type === 'next',
                'button-finish': props.type === 'finish',
                'button-disabled': props.disabled,
            })}
            disabled={!!props.disabled}
        >
            {props.text}
        </button>
    );
};

export default Button;

import React from 'react';
import classnames from 'classnames';

interface ButtonProps {
    buttonStyle: 'next' | 'cancel' | 'finish';
    text: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = props => {
    return (
        <button
            className={classnames({
                'button-cancel': props.buttonStyle === 'cancel',
                'button-next': props.buttonStyle === 'next',
                'button-finish': props.buttonStyle === 'finish',
                'button-disabled': props.disabled,
            })}
            disabled={!!props.disabled}
        >
            {props.text}
        </button>
    );
};

export default Button;

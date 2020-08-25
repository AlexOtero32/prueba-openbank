import React from 'react';
import classnames from 'classnames';

type ButtonProps = {
    buttonStyle: 'next' | 'cancel' | 'finish';
    text: string;
    type?: 'submit' | 'button';
    disabled?: boolean;
    onClick?: () => any;
};

const Button: React.FC<ButtonProps> = props => {
    return (
        <button
            className={classnames({
                'button-cancel': props.buttonStyle === 'cancel',
                'button-next': props.buttonStyle === 'next',
                'button-finish': props.buttonStyle === 'finish',
                'button-disabled': props.disabled,
            })}
            type={props.type || 'button'}
            disabled={!!props.disabled}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
};

export default Button;

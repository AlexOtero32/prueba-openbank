import React from 'react';
import classnames from 'classnames';
import { FaCheck } from 'react-icons/fa';

interface StepperProps {
    step: number;
    current: boolean;
    completed: boolean;
}

const Stepper: React.FC<StepperProps> = props => {
    return (
        <span
            className={classnames('stepper', {
                'stepper-done': props.completed,
                'stepper-current': props.current,
            })}
        >
            {props.completed ? <FaCheck /> : props.step}
        </span>
    );
};

export default Stepper;

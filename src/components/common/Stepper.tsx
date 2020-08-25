import React from 'react';
import classnames from 'classnames';
import { FaCheck } from 'react-icons/fa';
import { DisplayingScreen } from '../../redux/ui/types';
import { RootState } from '../../redux/store';
import { connect, ConnectedProps } from 'react-redux';

type StepperProps = StepperReduxProps & {
    step: DisplayingScreen;
};

const Stepper: React.FC<StepperProps> = props => {
    const completed = props.step < props.screen;

    return (
        <span
            className={classnames('stepper', {
                'stepper-done': completed,
                'stepper-current': props.screen === props.step,
            })}
        >
            {completed ? <FaCheck /> : props.step + 1}
        </span>
    );
};

const mapStateToProps = (state: RootState) => ({
    screen: state.ui.screen,
});

const connector = connect(mapStateToProps);

type StepperReduxProps = ConnectedProps<typeof connector>;

export default connector(Stepper);

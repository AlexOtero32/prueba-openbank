import React from 'react';
import Button from '../components/common/Button';

import { openWizard } from '../redux/ui/actions';
import { connect, ConnectedProps } from 'react-redux';
import { useTranslation } from 'react-i18next';

const HomeScreen: React.FC<HomeScreenProps> = props => {
    const { t } = useTranslation('common');

    return (
        <div className="container bg-white shadow-lg p-4 flex flex-col">
            <h1 className="title">{t('welcome')}</h1>
            <p className="mb-2">{t('initialExplanation')}</p>
            <div className="max-w-sm">
                <Button
                    buttonStyle="next"
                    text={t('openModalButton')}
                    onClick={() => props.openWizard()}
                />
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatchEvent: any) => ({
    openWizard: () => dispatchEvent(openWizard()),
});

const connector = connect(null, mapDispatchToProps);

type HomeScreenProps = ConnectedProps<typeof connector>;

export default connector(HomeScreen);

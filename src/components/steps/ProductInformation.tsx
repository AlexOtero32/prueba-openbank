import React from 'react';
import { useTranslation } from 'react-i18next';

const FirstStep: React.FC<{}> = () => {
    const { t } = useTranslation('productInfo');

    return (
        <>
            <div className="flex">
                <div className="image-container">{t('firstImage')}</div>
                <div className="image-container">{t('secondImage')}</div>
            </div>
        </>
    );
};

export default FirstStep;

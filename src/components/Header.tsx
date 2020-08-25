import React from 'react';

import i18n from '../i18n';

import LogoOpenBank from '../assets/img/logo_openbank.png';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
    const { t } = useTranslation('common');

    return (
        <header>
            <nav className="flex items-center justify-between flex-wrap bg-gray-300 shadow-lg p-6">
                <h1 className="flex items-center flex-shrink-0 text-white mr-6">
                    <img src={LogoOpenBank} alt="Logo" />
                </h1>
                <button
                    type="button"
                    className="inline-block px-4 py-2 leading-none border rounded text-secondary border-secondary hover:border-transparent hover:bg-transparent"
                    onClick={changeLanguage}
                >
                    {t('changeLanguage')}
                </button>
            </nav>
        </header>
    );
};

function changeLanguage() {
    const { language } = i18n;
    i18n.changeLanguage(language === 'en' ? 'es' : 'en', (err, t) => {
        if (err) return console.log('something went wrong loading', err);
        t('key');
    });
}

export default Header;

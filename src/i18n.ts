import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traducciones en inglés
import commonEN from './locale/en/common.json';
import wizardEN from './locale/en/wizard.json';

// Traducciones en castellano
import commonES from './locale/es/common.json';
import wizardES from './locale/es/wizard.json';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'es',
        resources: {
            en: {
                common: commonEN,
                wizard: wizardEN,
            },
            es: {
                common: commonES,
                wizard: wizardES,
            },
        },
    });

export default i18n;

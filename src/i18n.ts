import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traducciones en inglés
import commonEN from './locale/en/common.json';
import productInfoEN from './locale/en/productInfo.json';

// Traducciones en castellano
import commonES from './locale/es/common.json';
import productInfoES from './locale/es/productInfo.json';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'es',
        resources: {
            en: {
                common: commonEN,
                productInfo: productInfoEN,
            },
            es: {
                common: commonES,
                productInfo: productInfoES,
            },
        },
    });

export default i18n;

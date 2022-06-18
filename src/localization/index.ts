import i18n, {
    LanguageDetectorAsyncModule,
    Services,
    InitOptions,
} from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';
import 'moment/min/locales';
import moment from 'moment';
import en from './en';

export const AVAILABLE_LANGUAGES = {
    en,
};
const languageDetector: LanguageDetectorAsyncModule = {
    type: 'languageDetector',
    async: true,
    init: (
        _services: Services,
        _detectorOptions: object,
        _i18nextOptions: InitOptions,
    ) => {
        /* use services and options */
    },
    detect: (callback: (lng: string) => void) => {
        AsyncStorage.getItem('language', (err, language) => {
            if (err || !language) {
                if (err) {
                    console.log('Error fetching "language" from async store', err);
                } else {
                    console.log(
                        'No language is set, choosing the best available or English as fallback',
                    );
                }
                callback('en');
                return;
            }
            try {
                let parsedLanguage = JSON.parse(language)
                let lng = parsedLanguage.code.toLowerCase();
                callback(lng);
            } catch (e) {
                callback('en');
            }

        });

    },
    cacheUserLanguage: (language: string) => { },
};

i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        resources: AVAILABLE_LANGUAGES,
        react: {
            useSuspense: false,
        },
        interpolation: {
            escapeValue: false,
        },
        defaultNS: 'common',
    });

i18n.on('languageChanged', (lng: string) => moment.locale(lng));
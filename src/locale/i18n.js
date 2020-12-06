import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import hy from './hy.json';
import en from './en.json';
import ru from './ru.json';

const defaultLng = localStorage.getItem('locale') || 'hy';

document.documentElement.lang = defaultLng;

i18n.use(initReactI18next).init({
  keySeparator: '.',
  resources: {
    hy: { translations: hy },
    ru: { translations: ru },
    en: { translations: en },
  },
  lng: defaultLng,
  fallbackLng: 'hy',
  ns: ['translations'],
  defaultNS: 'translations',
});

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('locale', lng);
  document.documentElement.lang = lng;
});

export default i18n;

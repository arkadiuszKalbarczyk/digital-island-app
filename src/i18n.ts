import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./assets/locales/en/translation.json";
import translationIS from "./assets/locales/is/translation.json";
import translationPL from "./assets/locales/pl/translation.json";

const resources = {
  en: {
    translation: translationEN
  },
  is: {
    translation: translationIS
  },
  pl: {
    translation: translationPL
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});

export default i18n;

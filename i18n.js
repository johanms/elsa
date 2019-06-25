import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import common_en from "./translations/common_en.json";
import common_no from "./translations/common_no.json";

const resources = {
  en: {
    translation: common_en
  },
  en_US: {
    translation: common_en
  },
  en_GB: {
    translation: common_en
  },
  nb: {
    translation: common_no
  },
  nb_NO: {
    translation: common_no
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;

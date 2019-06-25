import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      currentTime: "Current time is",
      remember: "Remember",

      d0: "monday",
      d1: "tuesday",
      d2: "wednesday",
      d3: "thursday",
      d4: "friday",
      d5: "saturday",
      d6: "sunday",

      m0: "january",
      m1: "february",
      m2: "march",
      m3: "april",
      m4: "may",
      m5: "june",
      m6: "july",
      m7: "august",
      m8: "september",
      m9: "october",
      m10: "november",
      m11: "december",

      night: "night",
      morning: "morning",
      beforeDinner: "before dinner",
      afternoon: "afternoon",
      evening: "evening"
    }
  },
  nb_NO: {
    translation: {
      currentTime: "Klokken er",
      remember: "Husk",

      d0: "mandag",
      d1: "tirsdag",
      d2: "onsdag",
      d3: "torsdag",
      d4: "fredag",
      d5: "lørdag",
      d6: "søndag",

      m0: "januar",
      m1: "februar",
      m2: "mars",
      m3: "april",
      m4: "mai",
      m5: "juni",
      m6: "juli",
      m7: "august",
      m8: "september",
      m9: "oktober",
      m10: "november",
      m11: "desember",

      night: "natt",
      morning: "morgen",
      beforeDinner: "formiddag",
      afternoon: "ettermiddag",
      evening: "kveld"
    }
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

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import English from "../i18n/en.json";
import Vietnamese from "../i18n/vi.json";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";

let getLocalLang = localStorage.getItem("lang");

if (!getLocalLang) {
  getLocalLang = "vie";
}
const resources = {
  eng: {
    translation: English,
  },
  vie: {
    translation: Vietnamese,
  },
};

i18n
  .use(Backend)

  .use(initReactI18next)
  .init({
    resources,
    debug: true,
    lng: getLocalLang,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

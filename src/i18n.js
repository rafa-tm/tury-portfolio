import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from './locale/en/en.json'
import ptJSON from './locale/pt/pt.json'

i18n.use(initReactI18next).init({
    fallbackLng: "en",
    resources: {
        en: { ...enJSON },
        pt: { ...ptJSON },
    },
    //lng: "pt",
});
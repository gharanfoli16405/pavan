import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./en/translation.json";
import translationFA from "./fa/translation.json";

// منابع ترجمه
const resources = {
  en: {
    translation: translationEN,
  },
  fa: {
    translation: translationFA,
  },
};

// مقداردهی اولیه i18next
i18n.use(initReactI18next).init({
  resources,
  lng: "fa", // زبان پیش‌فرض
  fallbackLng: "en", // اگر ترجمه‌ای یافت نشد، از این زبان استفاده کن
  interpolation: {
    escapeValue: false, // برای استفاده از HTML در ترجمه‌ها
  },
});

export default i18n;

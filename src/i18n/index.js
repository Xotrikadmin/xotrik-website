// src/i18n/index.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import es from "./es.json";

const SUPPORTED = ["en", "es"];

// Normaliza 'es-CR', 'es-MX', etc. → 'es'; cualquier otro → 'en' por defecto
const normalizeLng = (lng) => (lng && lng.toLowerCase().startsWith("es") ? "es" : "en");

// idioma inicial: lo guardado o lo que detecte el navegador (normalizado)
const saved = (() => {
  try {
    return localStorage.getItem("lng");
  } catch {
    return null;
  }
})();

const browser = typeof navigator !== "undefined" ? navigator.language : "en";
const initialLng = SUPPORTED.includes(saved) ? saved : normalizeLng(browser);

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },

  lng: initialLng,

  // Fallback en cadena: si alguna vez usas 'es-CR', i18next cae a 'es' y luego a 'en'
  fallbackLng: ["es", "en"],
  supportedLngs: SUPPORTED,

  // Hace que 'es-CR' cargue 'es'
  load: "languageOnly",

  // Namespace por defecto
  defaultNS: "translation",

  interpolation: { escapeValue: false },

  // Permite que t(...) pueda devolver arrays/objetos cuando lo pidas
  // (Mantener en true no rompe; también puedes omitirlo y pedirlo por llamada)
  returnObjects: true,

  // Evita que strings vacíos o null oculten el fallback
  returnEmptyString: false,
  returnNull: false,

  debug: false,
});

export default i18n;

export const changeLanguage = (lng) => {
  const normalized = SUPPORTED.includes(lng) ? lng : normalizeLng(lng);
  i18n.changeLanguage(normalized);
  try {
    localStorage.setItem("lng", normalized);
  } catch {
    // Silently ignore localStorage errors
  }
};

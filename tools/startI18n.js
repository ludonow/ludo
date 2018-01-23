import i18next from 'i18next';
import i18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';

/**
 * Initialize a i18next instance.
 * @function startI18n
 * @param {object} files - Translation files.
 * @param {string} lang - Active language.
 */
const startI18n = (files, lang) =>
  i18next
    .use(i18nextBrowserLanguageDetector)
    .init({
      lng: lang, // active language http://i18next.com/translate/
      fallbackLng: 'en',
      resources: files,
      ns: ['layout'],
      defaultNS: 'layout',
      debug: false,
    });

export default startI18n;

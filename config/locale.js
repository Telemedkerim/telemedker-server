const i18n = require("i18next");
const Backend = require("i18next-fs-backend");
const path = require("path");

function setupLocale(app) {
  i18n.use(Backend).init({
    backend: {
      loadPath: path.join(__dirname, "../locales/{{lng}}.json"), // Use an absolute path
    },
    fallbackLng: "en", // Fallback language
    preload: [
      "en",
      "es",
      "fr",
      "de",
      "it",
      "nl",
      "pl",
      "ro",
      "tr",
      "ua",
      "cz",
      "bg",
    ],
    keySeparator: ".",
  });

  app.use((req, res, next) => {
    const language = req.headers["accept-language"] || "en";
    i18n.changeLanguage(language);
    next();
  });
}

module.exports = setupLocale;

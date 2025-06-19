// assets/js/lang.js

document.addEventListener("DOMContentLoaded", () => {
  const langButtons = {
    en: document.getElementById("lang-en"),
    si: document.getElementById("lang-si")
  };

  const updateLanguage = (lang) => {
    document.querySelectorAll(".lang").forEach(el => {
      const key = el.getAttribute("data-key");
      if (typeof translations !== 'undefined' && translations[key] && translations[key][lang]) {
        el.textContent = translations[key][lang];
      }
    });
  };

  langButtons.en.addEventListener("click", () => updateLanguage("en"));
  langButtons.si.addEventListener("click", () => updateLanguage("si"));

  // Optionally set default language on load
  updateLanguage("en");
});
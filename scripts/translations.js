async function updateLanguage(lang) {
  try {
    console.log(lang);
    const response = await fetch(`/translations/${lang}.json`);
    if (!response.ok) throw new Error(`Could not load ${lang}`);
    
    const translations = await response.json();

    document.documentElement.lang = lang;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[key]) {
        el.textContent = translations[key];
      }
    });
    
    localStorage.setItem('preferredLang', lang);

  } catch (error) {
    console.error("i18n Error:", error);
  }
}
function initI18n() {
    const savedLang = localStorage.getItem('preferredLang');
    const browserLang = navigator.language.split('-')[0];
    const defaultLang = savedLang || (i18n[browserLang] ? browserLang : 'en');

    updateLanguage(defaultLang);

    const activeBtn = document.querySelector(`.lang-btn[data-lang="${defaultLang}"]`);
    if (activeBtn) updateActiveButton(activeBtn);
}

const switcher = document.getElementById('language-switcher');
if (switcher) {
    switcher.addEventListener('click', (e) => {
        if (e.target.classList.contains('lang-btn')) {
            const selectedLang = e.target.getAttribute('data-lang');
            updateLanguage(selectedLang);
            localStorage.setItem('preferredLang', selectedLang);
            updateActiveButton(e.target);
        }
    });
}

function updateActiveButton(activeBtn) {
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

document.addEventListener('DOMContentLoaded', initI18n);
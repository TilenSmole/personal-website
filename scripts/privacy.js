function updateStatusDisplay() {
    const currentChoice = localStorage.getItem('cookie-consent-choice');

    const statusSpan = document.getElementById('current-status');

    if (statusSpan) {
        if (currentChoice === 'accept') {
            statusSpan.innerText = "Accepted ✅";
            statusSpan.style.color = "#2ecc71";
        } else if (currentChoice === 'reject') {
            statusSpan.innerText = "Rejected ❌";
            statusSpan.style.color = "#e74c3c";
        } else {
            statusSpan.innerText = "No choice made yet.";
        }
    }
}

function resetConsent() {
    localStorage.removeItem('cookie-consent-choice');
    window.location.href = "/";
}

document.addEventListener('DOMContentLoaded', updateStatusDisplay);

(() => {
    const banner = document.getElementById('cookie-consent');
    const acceptBtn = document.getElementById('cookie-accept');
    const rejectBtn = document.getElementById('cookie-reject');

    const consentChoice = localStorage.getItem('cookie-consent-choice');

    if (!consentChoice) {
        banner.setAttribute('aria-hidden', 'false');
        banner.classList.add('is-visible');
    }

    const handleChoice = (choice) => {
        setCookieConcent(choice);
        banner.classList.remove('is-visible');
        banner.setAttribute('aria-hidden', 'true');

        if (choice === 'accept') {
            initAnalytics();
            window.location.reload();
        }
    };

    acceptBtn.addEventListener('click', () => handleChoice('accept'));
    rejectBtn.addEventListener('click', () => handleChoice('reject'));
})();

function setCookieConcent(choice) {
    localStorage.setItem('cookie-consent-choice', choice);
}

function initAnalytics() {
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-2QE406BX4M";

    document.head.appendChild(gtagScript);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }

    gtag('js', new Date());
    gtag('config', 'G-2QE406BX4M');
}
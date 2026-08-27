function showMyInfo() {
    const home = document.getElementById("home");
    const aboutMe = document.getElementById("aboutMe");
    const btn = document.getElementById("showMyInfo");

    if (home.style.display === "none") {
        home.style.display = "flex";
        aboutMe.style.display = "none";
        btn.innerText = "O meni";
    } else {
        home.style.display = "none";
        aboutMe.style.display = "flex";
        btn.innerText = "<";
    }
}

// Replacement for $(el).load(url)
function loadHTML(selector, url) {
    return fetch(url)
        .then(res => res.text())
        .then(html => {
            document.querySelectorAll(selector).forEach(el => {
                el.innerHTML = html;
            });
        });
}

document.addEventListener("DOMContentLoaded", function () {
    if (window.contentLoaded) {
        console.log("Content already loaded, skipping...");
        return;
    }
    window.contentLoaded = true;

    loadHTML("#footer", "footer.html");

    loadHTML("#videosCarousel", localStorage.getItem('cookie-consent-choice') === 'accept' ? "videos.html" : "videos_disabled.html");

    loadHTML("#me", "aboutme.html");
    loadHTML(".sidebar", "_sidebar.html");

    loadHTML("#projectsCarousel", "projects.html").then(function () {
        Promise.all([
            loadHTML("#zmejelov", "projects/zmejelov.html"),
            loadHTML("#panap", "projects/panap.html"),
            loadHTML("#lyfio", "projects/lyfio.html"),
            loadHTML("#monobank", "projects/monobank.html"),
            loadHTML("#website", "projects/website.html"),
            loadHTML("#sloopyfruits", "projects/sloopyfruits.html"),
            loadHTML("#missya", "projects/missya.html")
        ]).then(function () {
            const savedLang = localStorage.getItem('preferredLang') || 'en';
            updateLanguage(savedLang);

            initCarousel();
        });
    });

    document.getElementById("showMyInfo").addEventListener('click', showMyInfo);
});

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

function initCarousel() {
    const carousel = document.getElementById("controls");
    if (!carousel) return;

    const track = carousel.querySelector(".carousel-track");
    const items = carousel.querySelectorAll(".carousel-item");
    const indicators = carousel.querySelectorAll(".carousel-indicators li");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");

    let index = 0;
    const total = items.length;

    function goTo(i) {
        index = (i + total) % total;
        track.style.transform = `translateX(-${index * 100}%)`;

        items.forEach((item, idx) => item.classList.toggle("active", idx === index));
        indicators.forEach((dot, idx) => dot.classList.toggle("active", idx === index));
    }

    prevBtn.addEventListener("click", () => goTo(index - 1));
    nextBtn.addEventListener("click", () => goTo(index + 1));

    indicators.forEach((dot, i) => {
        dot.addEventListener("click", () => goTo(i));
    });

    let startX = 0;
    track.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });
    track.addEventListener("touchend", (e) => {
        const diff = e.changedTouches[0].clientX - startX;
        if (diff > 50) goTo(index - 1);
        else if (diff < -50) goTo(index + 1);
    });
}

document.addEventListener("DOMContentLoaded", initCarousel);
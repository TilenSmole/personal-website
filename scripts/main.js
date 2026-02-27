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

$(document).ready(function () {
    if (window.contentLoaded) {
        console.log("Content already loaded, skipping...");
        return;
    }
    window.contentLoaded = true;

    $("#footer").load("footer.html");

    $("#videosCarousel").load(localStorage.getItem('cookie-consent-choice') === 'accept' ? "videos.html" : "videos_disabled.html");

    $("#me").load("aboutme.html");
    $(".sidebar").load("_sidebar.html");

    $("#projectsCarousel").load("projects.html", function () {
        $.when(
            $("#zmejelov").load("projects/zmejelov.html"),
            $("#panap").load("projects/panap.html"),
            $("#lyfio").load("projects/lyfio.html"),
            $("#monobank").load("projects/monobank.html"),
            $("#website").load("projects/website.html"),
            $("#sloopyfruits").load("projects/sloopyfruits.html")
        ).then(function () {

            const savedLang = localStorage.getItem('preferredLang') || 'en';
            updateLanguage(savedLang);
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
        setCookieConcent(choice)
        banner.classList.remove('is-visible');
        banner.setAttribute('aria-hidden', 'true');

        if (choice === 'accept') {
            initAnalytics();
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


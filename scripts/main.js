// scripts/main.js

$(document).ready(function() {
    // Prevent this code from running more than once (fixes infinite loop)
    if (window.contentLoaded) {
        console.log("Content already loaded, skipping...");
        return;
    }
    window.contentLoaded = true;

    // Load main fragments
    $("#footer").load("footer.html");
    $("#videosCarousel").load("videos.html");
    $("#me").load("aboutMe.html");
    $(".sidebar").load("_sidebar.html");

    $("#projectsCarousel").load("projects.html", function() {
        console.log("Projects carousel successfully loaded. Now loading sub-projects.");

        // Prevent sub-projects from loading multiple times
        if (window.subProjectsLoaded) {
            console.log("Sub-projects already loaded, skipping...");
            return;
        }
        window.subProjectsLoaded = true;

        $("#zmejelov").load("projects/zmejelov.html");
        $("#panap").load("projects/panap.html");
        $("#lyfio").load("projects/lyfio.html");
        $("#monobank").load("projects/monobank.html");
        $("#website").load("projects/website.html");
        $("#sloopyfruits").load("projects/sloopyfruits.html");
    });

    // Your existing showMyInfo function (toggle "O meni")
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
            btn.innerText = "Nazaj";
        }
    }

    // Use event delegation to handle clicks even if button is duplicated/reloaded
    $(document).on('click', '#showMyInfo', showMyInfo);
});
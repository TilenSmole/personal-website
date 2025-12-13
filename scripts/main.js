function showMyInfo() {
    const home = document.getElementById("home");
    const btn = document.getElementById("showMyInfo");
    const aboutMe = document.getElementById("aboutMe");

    const homeDisplay = window.getComputedStyle(home).display;
    const showHome = homeDisplay === "none";

    if (showHome) {
        home.style.display = "flex";
        aboutMe.style.display = "none";
        btn.innerText = "O meni";
        console.log("changing to flex");
    } else {
        home.style.display = "none";
        aboutMe.style.display = "flex";
        btn.innerText = "Nazaj";
        console.log("changing to none");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("showMyInfo").addEventListener('click', showMyInfo);
});

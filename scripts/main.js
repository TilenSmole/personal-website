
const loginButton = document.getElementById("showMyInfo").addEventListener('click', showMyInfo);

function showMyInfo() {
    var home = document.getElementById("home");
    var showMyInfo = document.getElementById("showMyInfo");
    var aboutMe = document.getElementById("aboutMe");
    var aboutMe = document.getElementById("aboutMe");
    var homeNav = document.getElementsByClassName("homeNav");

    showHome = home.style.display == "none"

    if (showHome) {
        home.style.display = "flex";
        showMyInfo.innerText = "O meni";
        aboutMe.style.display = "none";
        homeNav.href = "#home"
    }
    else {
        home.style.display = "none";
        showMyInfo.innerText = "Nazaj";
        aboutMe.style.display = "flex";
                homeNav.href = "#aboutMe"

    }
}

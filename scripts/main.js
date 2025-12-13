
function showMyInfo() {
    var home = document.getElementById("home");
    var showMyInfo = document.getElementById("showMyInfo");
    var aboutMe = document.getElementById("aboutMe");

    showHome = home.style.display == "none"

    if (showHome) {
        home.style.display = "flex";
        showMyInfo.innerText = "O meni";
        aboutMe.style.display = "none";
    }
    else {
        home.style.display = "none";
        showMyInfo.innerText = "Nazaj";
        aboutMe.style.display = "flex";

    }
}


document.addEventListener("DOMContentLoaded", () => {
   document.getElementById("showMyInfo").addEventListener('click', showMyInfo);

});
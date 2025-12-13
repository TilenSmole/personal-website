
function showMyInfo() {
    var home = document.getElementById("home");
    var showMyInfo = document.getElementById("showMyInfo");
    var aboutMe = document.getElementById("aboutMe");

    var showHome = home.style.display == "none"

    if (showHome) {
        home.style.display = "flex";
        showMyInfo.innerText = "O meni";
        aboutMe.style.display = "none";
                    console.log("changing to flex")

    }
    else {
        home.style.display = "none";
        showMyInfo.innerText = "Nazaj";
        aboutMe.style.display = "flex";
            console.log("changing to none")
    }
}


document.addEventListener("DOMContentLoaded", () => {
   document.getElementById("showMyInfo").addEventListener('click', showMyInfo);

});
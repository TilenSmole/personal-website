window.items = window.items || [];
window.home = window.home || document.getElementById("home");

function loadData(){
    const fileNames = [
    "java_fx.png",
    "js.png",
    "lyfio logo.png",
    "monobank_logo.png",
    "my page logo.png",
    "node js.png",
    "phaser.png",
    "php.png",
    "python.jpg",
    "ruby.jpg",
    "slim.jpg",
    "sloopy-fruits logo.png",
    "flutter.jpg",
    "react.jpg",
    "prisma.png",
    "typescript.png",
    "wordpress.png",
    "zmejelov (1).png",
    "panap_logo.png"

];



fileNames.forEach(file => {
    const isLogo = file.toLowerCase().includes("logo");
    const isZmejelov = file.toLowerCase().includes("zmejelov");
    const isSmallScreen = window.innerWidth < 992;

    if ((isLogo || isZmejelov) && isSmallScreen) {
        return;
    }

    const item = document.createElement("img");
    item.src = `logos/${encodeURIComponent(file)}`;
    item.classList.add("floating-item", "item");

    const container = document.createElement("a");
    container.style.position = "absolute";

    if (isLogo) {
        item.classList.add("floating-item-logo");
        container.href = "https://example.com";
        container.target = "_blank";
    } else if (isZmejelov) {
        item.classList.add("floating-item-zmejelov");
        container.href = "https://example.com";
        container.target = "_blank";
    } else {
        item.classList.add("floating-item-basic");
    }

    container.appendChild(item);
    home.appendChild(container);

    items.push({
        el: container,
        x: Math.random() * (home.clientWidth - item.width * 2),
        y: Math.random() * (home.clientHeight - item.height * 2),
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        angle: (Math.random() * 20) - 10,
        removable: !isLogo && !isZmejelov
    });
});
} 

function animate() {
    for (let item of items) {
        item.x += item.dx;
        item.y += item.dy;

        if (item.x < 0 || item.x > home.clientWidth - 300) item.dx *= -1;
        if (item.y < 0 || item.y > home.clientHeight - 300) item.dy *= -1;

        item.el.style.transform = `translate(${item.x}px, ${item.y}px) rotate(${item.angle}deg)`;
    }
    requestAnimationFrame(animate);
}

document.addEventListener("DOMContentLoaded", () => {
    loadData();
    animate();
});
window.items = window.items || [];
window.home = window.home || document.getElementById("home");

function loadData() {
    const fileNames = [
        "bash.svg", "clojurescript.svg", "csharp.svg", "css.svg", "dart.svg",
        "flutter.svg", "git.svg", "github.svg", "go.svg", "html.svg",
        "java.svg", "javascript.svg", "phaser.svg", "php.svg",
        "postgresql.svg", "prisma.svg", "python.svg", "rails.svg",
        "react.svg", "ruby.svg", "typescript.svg",
    ];

    fileNames.forEach(file => {
        const isLogo = file.toLowerCase().includes("logo");
        const isZmejelov = file.toLowerCase().includes("zmejelov");
        const isSmallScreen = window.innerWidth < 992;

        if ((isLogo || isZmejelov) && isSmallScreen) {
            return;
        }

        const item = document.createElement("img");
        item.src = `img-icons/${encodeURIComponent(file)}`;
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

        // Push initial state. We use fallback sizes if dimensions aren't rendered instantly,
        // but container.clientWidth will update once layout runs.
        items.push({
            el: container,
            x: Math.random() * Math.max(100, home.clientWidth - 100),
            y: Math.random() * Math.max(100, home.clientHeight - 100),
            dx: (Math.random() - 0.5) * 2,
            dy: (Math.random() - 0.5) * 2,
            angle: (Math.random() * 20) - 10,
            removable: !isLogo && !isZmejelov
        });
    });
} 

function animate() {
    const maxX = home.clientWidth;
    const maxY = home.clientHeight;

    for (let item of items) {
        item.x += item.dx;
        item.y += item.dy;

        const elWidth = item.el.clientWidth || 80;
        const elHeight = item.el.clientHeight || 80;

        if (item.x <= 0) {
            item.x = 0;
            item.dx *= -1;
        } else if (item.x >= maxX - elWidth) {
            item.x = maxX - elWidth;
            item.dx *= -1;
        }

        if (item.y <= 0) {
            item.y = 0;
            item.dy *= -1;
        } else if (item.y >= maxY - elHeight) {
            item.y = maxY - elHeight;
            item.dy *= -1;
        }

        item.el.style.transform = `translate(${item.x}px, ${item.y}px) rotate(${item.angle}deg)`;
    }
    requestAnimationFrame(animate);
}

document.addEventListener("DOMContentLoaded", () => {
    loadData();
    animate();
});
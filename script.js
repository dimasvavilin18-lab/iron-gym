// ========================================
// IRON GYM — JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("IRON GYM loaded");

    // Плавная прокрутка по якорным ссылкам
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    // Добавляем класс header при прокрутке
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            header.classList.add("header--scrolled");
        } else {
            header.classList.remove("header--scrolled");
        }

    });

});

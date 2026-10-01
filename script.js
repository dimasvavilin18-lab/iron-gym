// ========================================
// IRON GYM — JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("IRON GYM loaded");


    // ========================================
    // ПЛАВНАЯ ПРОКРУТКА
    // ========================================

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


    // ========================================
    // HEADER ПРИ ПРОКРУТКЕ
    // ========================================

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            header.classList.add("header--scrolled");
        } else {
            header.classList.remove("header--scrolled");
        }

    });


    // ========================================
    // ФОРМА ЗАПИСИ
    // ========================================

    const form = document.querySelector(".booking-form");

    if (form) {

        form.addEventListener("submit", event => {

            event.preventDefault();

            const name = form.querySelector('[name="name"]').value;
            const phone = form.querySelector('[name="phone"]').value;
            const program = form.querySelector('[name="program"]').value;


            // Номер WhatsApp клуба
            // ПОТОМ заменим его на настоящий номер
            const whatsappNumber = "77000000000";


            const message =
                `Здравствуйте! Хочу записаться в IRON GYM.%0A%0A` +
                `Имя: ${name}%0A` +
                `Телефон: ${phone}%0A` +
                `Направление: ${program}`;


            const whatsappLink =
                `https://wa.me/${whatsappNumber}?text=${message}`;


            window.open(whatsappLink, "_blank");

        });

    }
// ========================================
// MOBILE MENU
// ========================================

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("nav--open");
        menuButton.classList.toggle("menu-button--active");

    });


    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("nav--open");
            menuButton.classList.remove("menu-button--active");

        });

    });

}
});

document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // МОБИЛЬНОЕ МЕНЮ
    // =========================

    const menuButton = document.querySelector(".menu-button");
    const nav = document.querySelector(".nav");

    if (menuButton && nav) {

        menuButton.addEventListener("click", function () {
            nav.classList.toggle("nav--open");
            menuButton.classList.toggle("menu-button--active");
        });

        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                nav.classList.remove("nav--open");
                menuButton.classList.remove("menu-button--active");
            });
        });
    }


    // =========================
    // ПЛАВНАЯ ПРОКРУТКА
    // =========================

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const id = link.getAttribute("href");

            if (id === "#") return;

            const target = document.querySelector(id);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });

    });


    // =========================
    // HEADER ПРИ ПРОКРУТКЕ
    // =========================

    const header = document.querySelector(".header");

    if (header) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 50) {
                header.classList.add("header--scrolled");
            } else {
                header.classList.remove("header--scrolled");
            }

        });

    }


    // =========================
    // АНИМАЦИЯ ПОЯВЛЕНИЯ
    // =========================

    const animatedElements = document.querySelectorAll(
        ".section__label, .section h2, .about__text, .program-card, .trainer-card, .price-card, .review-card, .contact-card, .contacts__bottom, .booking__inner"
    );

    animatedElements.forEach(function (element) {
        element.classList.add("scroll-hidden");
    });


    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("scroll-show");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    animatedElements.forEach(function (element) {
        observer.observe(element);
    });


    // =========================
    // ФОРМА ЗАПИСИ
    // =========================

    const form = document.querySelector(".booking-form");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = form.querySelector('[name="name"]').value;
            const phone = form.querySelector('[name="phone"]').value;
            const program = form.querySelector('[name="program"]').value;

            const whatsappNumber = "77000000000";

            const message =
                "Здравствуйте! Хочу записаться в IRON GYM.%0A%0A" +
                "Имя: " + name + "%0A" +
                "Телефон: " + phone + "%0A" +
                "Направление: " + program;

            window.open(
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                message,
                "_blank"
            );

        });

    }

});

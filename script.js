/* =================================
   IRON GYM — SCRIPT
================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       ELEMENTS
    ================================= */

    const header = document.querySelector(".header");
    const menuButton = document.querySelector(".menu-button");
    const nav = document.querySelector(".nav");
    const navLinks = document.querySelectorAll(".nav a");
    const bookingForm = document.querySelector(".booking-form");


    /* ================================
       MOBILE MENU
    ================================= */

    if (menuButton && nav) {

        menuButton.addEventListener("click", () => {

            const isOpen = nav.classList.toggle("nav--open");

            menuButton.classList.toggle("active", isOpen);

            document.body.classList.toggle("menu-open", isOpen);

            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Закрыть меню" : "Открыть меню"
            );

        });


        /* Закрытие меню после нажатия
           на пункт навигации */

        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                nav.classList.remove("nav--open");

                menuButton.classList.remove("active");

                document.body.classList.remove("menu-open");

                menuButton.setAttribute(
                    "aria-label",
                    "Открыть меню"
                );

            });

        });

    }


    /* ================================
       HEADER ON SCROLL
    ================================= */

    const updateHeader = () => {

        if (!header) return;

        if (window.scrollY > 50) {

            header.classList.add("header--scrolled");

        } else {

            header.classList.remove("header--scrolled");

        }

    };


    window.addEventListener("scroll", updateHeader);

    updateHeader();


    /* ================================
       CLOSE MENU WHEN CLICKING OUTSIDE
    ================================= */

    document.addEventListener("click", (event) => {

        if (!nav || !menuButton) return;

        const clickedInsideMenu =
            nav.contains(event.target);

        const clickedButton =
            menuButton.contains(event.target);

        if (
            nav.classList.contains("nav--open") &&
            !clickedInsideMenu &&
            !clickedButton
        ) {

            nav.classList.remove("nav--open");

            menuButton.classList.remove("active");

            document.body.classList.remove("menu-open");

            menuButton.setAttribute(
                "aria-label",
                "Открыть меню"
            );

        }

    });


    /* ================================
       ESC — CLOSE MOBILE MENU
    ================================= */

    document.addEventListener("keydown", (event) => {

        if (event.key !== "Escape") return;

        if (!nav || !menuButton) return;

        nav.classList.remove("nav--open");

        menuButton.classList.remove("active");

        document.body.classList.remove("menu-open");

        menuButton.setAttribute(
            "aria-label",
            "Открыть меню"
        );

    });


    /* ================================
       BOOKING FORM
    ================================= */

    if (bookingForm) {

        bookingForm.addEventListener("submit", (event) => {

            event.preventDefault();


            const nameInput =
                bookingForm.querySelector('[name="name"]');

            const phoneInput =
                bookingForm.querySelector('[name="phone"]');

            const programInput =
                bookingForm.querySelector('[name="program"]');


            const name =
                nameInput ? nameInput.value.trim() : "";

            const phone =
                phoneInput ? phoneInput.value.trim() : "";

            const program =
                programInput ? programInput.value : "";


            if (!name || !phone || !program) {

                alert("Пожалуйста, заполни все поля.");

                return;

            }


            alert(
                `Спасибо, ${name}!\n\n` +
                `Заявка на направление «${program}» отправлена.\n` +
                `Мы свяжемся с тобой по номеру ${phone}.`
            );


            bookingForm.reset();

        });

    }


    /* ================================
       SMOOTH SCROLL
    ================================= */

    const anchorLinks =
        document.querySelectorAll('a[href^="#"]');


    anchorLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (!target) return;


            event.preventDefault();


            const headerHeight =
                header ? header.offsetHeight : 0;


            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;


            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* ================================
       REVEAL ANIMATION
    ================================= */

    const revealElements =
        document.querySelectorAll(
            ".section__label, " +
            ".section h2, " +
            ".about__text, " +
            ".program-card, " +
            ".trainer-card, " +
            ".price-card, " +
            ".review-card, " +
            ".contact-card"
        );


    revealElements.forEach((element) => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

    });


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";


                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });


    /* ================================
       CURRENT YEAR
    ================================= */

    const yearElements =
        document.querySelectorAll(
            ".footer__bottom span:first-child"
        );


    yearElements.forEach((element) => {

        element.textContent =
            `© ${new Date().getFullYear()} IRON GYM`;

    });


    /* ================================
       PHONE INPUT
    ================================= */

    const phoneInput =
        document.querySelector(
            '.booking-form input[name="phone"]'
        );


    if (phoneInput) {

        phoneInput.addEventListener(
            "input",
            () => {

                let value =
                    phoneInput.value.replace(
                        /[^\d+]/g,
                        ""
                    );


                if (
                    value.length > 0 &&
                    !value.startsWith("+")
                ) {

                    value = "+" + value;

                }


                phoneInput.value = value;

            }
        );

    }


    /* ================================
       CONSOLE
    ================================= */

    console.log(
        "IRON GYM loaded successfully."
    );

});

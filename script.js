/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* Close menu when clicking link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================
   DARK / LIGHT MODE
========================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "dark");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "light");

    }

});


/* Load saved theme */

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    const icon = themeBtn.querySelector("i");

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

}


/* =========================
   SKILL ANIMATION
========================= */

const progressBars = document.querySelectorAll(".progress-bar");

function animateSkills() {

    progressBars.forEach(bar => {

        const position = bar.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {

            bar.style.width = bar.dataset.width;

        }

    });

}

window.addEventListener("scroll", animateSkills);

animateSkills();


/* =========================
   COPY EMAIL
========================= */

const copyEmail = document.getElementById("copyEmail");

copyEmail.addEventListener("click", () => {

    const email = document.getElementById("emailText").textContent;

    navigator.clipboard.writeText(email);

    showNotification("Email copied!");

});


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    showNotification(
        "Thank you, " + name + "! Your message was received."
    );

    contactForm.reset();

});


/* =========================
   NOTIFICATION
========================= */

function showNotification(message) {

    const notification = document.getElementById("notification");

    notification.textContent = message;

    notification.classList.add("show");

    setTimeout(() => {

        notification.classList.remove("show");

    }, 3000);

}


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();
/*=====================================
        TYPING ANIMATION
=====================================*/

var typed = new Typed("#element", {

    strings: [
        "Frontend Developer",
        "Web Developer",
        "JavaScript Developer",
        "Node.js Learner"
    ],

    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1200,
    loop: true

});


/*=====================================
        STICKY NAVBAR
=====================================*/

window.addEventListener("scroll", function() {

    const header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 50);

});


/*=====================================
        ACTIVE MENU
=====================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=====================================
      SCROLL TO TOP BUTTON
=====================================*/

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");

    }

});


/*=====================================
        CONTACT FORM
=====================================*/

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("✅ Thank you! Your message has been sent.");

        form.reset();

    });

}


/*=====================================
        SMOOTH SCROLL
=====================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});


/*=====================================
        FADE-IN ANIMATION
=====================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-animation");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll("section").forEach(section => {

    observer.observe(section);

});


/*=====================================
        CONSOLE MESSAGE
=====================================*/

console.log("🚀 Portfolio Loaded Successfully");
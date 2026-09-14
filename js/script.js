/* ==========================================
   PORTFOLIO JAVASCRIPT
   Kamogelo Seale
========================================== */

// ==========================================
// Typing Animation
// ==========================================

const titles = [
    "Aspiring Cybersecurity Engineer",
    "AI Enthusiast",
    "Cloud Computing Learner"
];

const typingElement = document.getElementById("typing");

let titleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    const current = titles[titleIndex];

    if (!deleting) {

        typingElement.textContent = current.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === current.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;

        }

    } else {

        typingElement.textContent = current.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            titleIndex++;

            if (titleIndex >= titles.length) {

                titleIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 40 : 80);

}

typeEffect();


// ==========================================
// Scroll Reveal Animation
// ==========================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// ==========================================
// Active Navigation
// ==========================================

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

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


// ==========================================
// Contact Form
// ==========================================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you for your message! This contact form is for portfolio demonstration purposes.");

        form.reset();

    });

}
document.querySelectorAll("section").forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(40px)";

    window.addEventListener("scroll", () => {
        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            section.style.transition = "0.8s";
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("msg").innerText = "Message Sent (Backend Ready)";
});
const elements = document.querySelectorAll(".card, .timeline-item");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});
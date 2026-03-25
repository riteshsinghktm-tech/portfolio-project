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

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message received! Backend works locally.");
});
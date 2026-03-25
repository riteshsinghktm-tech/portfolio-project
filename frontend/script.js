document.addEventListener("DOMContentLoaded", function () {

    console.log("JS LOADED");

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        console.log("FORM SUBMITTED");

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        try {
            const res = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                })
            });

            const data = await res.text();
            alert(data);

        } catch (error) {
            console.error(error);
            alert("Error sending data");
        }
    });

});
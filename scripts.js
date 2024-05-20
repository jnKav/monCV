document.getElementById('contactForm').addEventListener('submit',
    function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const status = document.getElementById('status');

        if (name === "" || email === "" || message === "") {
            status.textContent = "Veuillez remplir tous les champs.";
            status.style.color = "red";
            return;
        }

        status.textContent = "Envoi...";
        status.style.color = "#142a6f";

        setTimeout(() => {
            status.textContent = "Merci pour votre message!";
            status.style.color = "green";

            document.getElementById('contactForm').reset();
        }, 1000);
    }
);
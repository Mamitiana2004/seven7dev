const contact_name = document.getElementById("contact-name");
const contact_email = document.getElementById("contact-email");
const contact_message = document.getElementById("contact-message");

const subject = document.getElementById("subject");

const contact_form = document.getElementById("contact-form");

const loader = document.getElementById("preloader-active");

contact_form.addEventListener("submit", (e) => {
    e.preventDefault();

    loader.classList.add("active"); // Afficher le loader

    const data = {
        name: contact_name.value,
        email: contact_email.value,
        phone: "null",
        message: contact_message.value,
        subject: subject.value,
    };

    emailjs.send("service_eahizlw", "template_8hqk352", {
        name: data.name,
        email: data.email,
        message: JSON.stringify(data)
    }).then((response) => {
        contact_name.value = "";
        contact_email.value = "";
        contact_message.value = "";
        subject.value = "";

        setTimeout(() => {
            loader.classList.remove("active"); // Cacher le loader après 500ms
        }, 500);
    }, (error) => {
        console.log(error);
        loader.classList.remove("active"); // Cacher le loader en cas d'erreur
    });
});

document
.getElementById("myForm")
.addEventListener("submit", function (event) {
    event.preventDefault();

    const serviceID = "service_8pgiqcm";
    const templateID = "template_vrae3hu";

    // send the email here
    emailjs.sendForm(serviceID, templateID, this).then(
    (response) => {
        console.log("SUCCES!", response.status, response.text);
        alert("ENVOYÉ AVEC SUCCÈS!");
        location.reload();
    },
    (error) => {
        console.log("FAILED...", error);
        alert("FAILED...", error);
    }
    );
});
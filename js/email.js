// listen to the form submission
document
.getElementById("form")
.addEventListener("submit", function (event) {
    event.preventDefault();

    const serviceID = "service_qapwzxu";
    const templateID = "template_vrae3hu";

    // send the email here
    emailjs.sendForm(serviceID, templateID, this).then(
    (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("SUCCESS!");
    },
    (error) => {
        console.log("FAILED...", error);
        alert("FAILED...", error);
    }
    );
});
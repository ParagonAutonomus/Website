function sendEmail() {
    event.preventDefault();  // Prevents default form submission

    var params = {
        name: document.getElementById("fname").value,
        email: document.getElementById("mail").value,
        message: document.getElementById("subject").value
    };
    const serviceID = "service_sa926ag";
    const templateID = "template_q9p6lna";

    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("fname").value = "";
            document.getElementById("mail").value = "";
            document.getElementById("subject").value = "";
            console.log(res);
            alert("Your message was sent successfully!");
        })
        .catch((err) => console.log(err));
}

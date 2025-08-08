// Inicia EmailJS con tu public key (User ID)
(function () {
  emailjs.init("IPR9Cf6ZH_duiStdg"); // Sustituye con tu User ID de EmailJS
})();

// Función que maneja el envío del formulario
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita el envío por defecto

  // Recoge los datos del formulario
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Crea el objeto con los datos del formulario
  const templateParams = {
    name: name,
    email: email,
    message: message,
  };

  // Envía el formulario utilizando EmailJS
  emailjs.send("service_i2hnglo", "template_wbfy6id", templateParams)
    .then(function(response) {
      console.log("Correo enviado con éxito", response);
      alert("¡Mensaje enviado con éxito!");
      document.getElementById("contact-form").reset(); // Resetea el formulario
    }, function(error) {
      console.log("Error al enviar el correo", error);
      alert("Hubo un error, por favor intenta nuevamente.");
    });
});

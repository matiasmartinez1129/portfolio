// Validación de formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert('Mensaje enviado con éxito');
    // Aquí podrías integrar un servicio de backend para enviar el formulario
  } else {
    alert('Por favor, completa todos los campos');
  }
});

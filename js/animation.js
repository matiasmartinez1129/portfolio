// Lógica para abrir y cerrar el menú en pantallas pequeñas
const navLinks = document.querySelector('.nav-links');

// Detectamos el evento de cambio de tamaño para el menú en pantallas pequeñas
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('active');
  }
});

// Abre y cierra el menú cuando se hace clic
document.querySelector('.logo').addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    navLinks.classList.toggle('active');
  }
});

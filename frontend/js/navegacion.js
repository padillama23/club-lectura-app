document.addEventListener('DOMContentLoaded', () => {
  const botonInicio = document.getElementById('boton-inicio');

  if (botonInicio) {
    botonInicio.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }
});

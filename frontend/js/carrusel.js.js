document.addEventListener('DOMContentLoaded', () => {
  const imagenes = document.querySelectorAll('#carrusel img');
  let indice = 0;

  function mostrarImagen(i) {
    imagenes.forEach(img => img.classList.remove('activa'));
    imagenes[i].classList.add('activa');
  }

  function siguienteImagen() {
    indice = (indice + 1) % imagenes.length;
    mostrarImagen(indice);
  }

  // Mostrar la primera imagen
  mostrarImagen(indice);

  // Ciclo automático cada 4 segundos
  setInterval(siguienteImagen, 4000);

  // Avance manual al hacer clic
  imagenes.forEach(img => {
    img.addEventListener('click', siguienteImagen);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const buscador = document.getElementById('buscador'); // campo de texto
  const filtro = document.getElementById('filtro-categoria'); // selector
  const libros = document.querySelectorAll('.libro'); // todos los libros

  function filtrarLibros() {
    const texto = buscador.value.toLowerCase(); // lo que escribe el usuario
    const categoria = filtro.value; // categoría seleccionada

    libros.forEach(libro => {
      const titulo = libro.querySelector('h4').textContent.toLowerCase(); // título del libro
      const perteneceCategoria = categoria === 'todos' || libro.classList.contains(categoria); // ¿coincide con la categoría?
      const coincideBusqueda = titulo.includes(texto); // ¿coincide con el texto?

      // Mostrar u ocultar el libro
      libro.style.display = (perteneceCategoria && coincideBusqueda) ? 'block' : 'none';
    });
  }

  // Activar filtros al escribir o cambiar categoría
  buscador.addEventListener('input', filtrarLibros);
  filtro.addEventListener('change', filtrarLibros);
});

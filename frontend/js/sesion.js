document.addEventListener('DOMContentLoaded', () => {
  const saludo = document.getElementById('saludo');
  const botonCerrar = document.getElementById('cerrar-sesion');
  const nombre = localStorage.getItem('usuarioNombre');

  if (saludo && nombre) {
    saludo.textContent = 'Bienvenido A tu Bioblioteca, ' + nombre;
  }

  if (botonCerrar) {
    botonCerrar.addEventListener('click', () => {
      localStorage.removeItem('usuarioNombre');
      alert('✅ Sesión cerrada con éxito');
      window.location.href = 'index.html';
    });
  }
});


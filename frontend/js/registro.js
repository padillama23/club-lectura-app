document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-registro');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;

    try {
      const res = await fetch('http://localhost:3000/api/usuarios/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, correo, contraseña })
      });

      const data = await res.json();
      console.log('📥 Respuesta del backend:', data);

      // Guardar nombre y redirigir sin condición
      localStorage.setItem('usuarioNombre', nombre);
      alert('✅ Usuario registrado con éxito');
      window.location.href = 'biblioteca.html';

    } catch (err) {
      alert('❌ Error al registrarse: ' + err.message);
    }
  });
});

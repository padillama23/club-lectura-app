document.getElementById('form-login').addEventListener('submit', async (e) => {
  e.preventDefault();

  const identificador = document.getElementById('login-identificador').value.trim();
  const contraseña = document.getElementById('login-contraseña').value.trim();

  try {
    const res = await fetch('http://localhost:3000/api/usuarios/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identificador, contraseña })
    });

    if (!res.ok) {
      const texto = await res.text();
      throw new Error('Respuesta no válida: ' + texto.slice(0, 100));
    }

    const data = await res.json();
    alert('Bienvenido, ' + data.nombre);
    localStorage.setItem('usuarioNombre', data.nombre);
    window.location.href = 'biblioteca.html';

  } catch (err) {
    alert('Error al iniciar sesión: ' + err.message);
  }
});


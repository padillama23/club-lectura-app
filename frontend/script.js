document.getElementById('registro').addEventListener('submit', async (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const contraseña = document.getElementById('contraseña').value;

  const res = await fetch('http://localhost:3000/api/usuarios/registro', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, correo, contraseña })
  });

  const data = await res.json();
  alert('Usuario registrado con ID: ' + data.id);
});
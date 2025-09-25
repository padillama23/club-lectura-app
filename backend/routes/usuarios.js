const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const router = express.Router();

const db = new sqlite3.Database('./usuarios.db');

// Crear tabla si no existe
db.run(`CREATE TABLE IF NOT EXISTS usuarios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT,
  correo TEXT,
  contraseña TEXT
)`);

// Registro
router.post('/registro', (req, res) => {
  const { nombre, correo, contraseña } = req.body;

  db.run(
    `INSERT INTO usuarios (nombre, correo, contraseña) VALUES (?, ?, ?)`,
    [nombre, correo, contraseña],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

// Listar usuarios
router.get('/', (req, res) => {
  db.all('SELECT id, nombre, correo FROM usuarios', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Inicio de sesión con nombre o correo
router.post('/login', (req, res) => {
  const { identificador, contraseña } = req.body;

  const esCorreo = identificador.includes('@');
  const campo = esCorreo ? 'correo' : 'nombre';

  db.get(`SELECT * FROM usuarios WHERE ${campo} = ? AND contraseña = ?`,
    [identificador, contraseña],
    (err, row) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!row) return res.status(401).json({ error: 'Credenciales incorrectas' });

      res.json({ id: row.id, nombre: row.nombre });
    });
});

module.exports = router;

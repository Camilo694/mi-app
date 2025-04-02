const express = require('express');
const app = express();

const PORT = process.env.PORT || 10000;

// Ruta principal
app.get('/', (req, res) => {
    res.send('Bienvenido a mi servidor Express');
});

// Nueva ruta 1
app.get('/saludo', (req, res) => {
    res.send('¡Hola, usuario!');
});

// Nueva ruta 2
app.get('/info', (req, res) => {
    res.json({ mensaje: 'Este es un servidor con Express', version: '1.0.0' });
});

// Nueva ruta 3 con parámetro dinámico
app.get('/usuario/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.send(`Bienvenido, ${nombre}!`);
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});


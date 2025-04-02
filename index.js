const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

// Middleware para procesar JSON
app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
    res.send('Bienvenido a mi servidor Express');
});

// Ruta de usuarios
app.get('/usuarios', (req, res) => {
    res.json([
        { id: 1, nombre: 'Juan' },
        { id: 2, nombre: 'Maria' }
    ]);
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// 1. Importar Express
const express = require('express');

// 2. Crear una instancia de la aplicación Express
const app = express();

// 3. Definir el puerto donde correrá el servidor
const PORT = 3000;

// 4. Definir rutas (endpoints)

// Ruta principal (home)
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Mi primer Express</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f0f0f0;
                        text-align: center;
                        padding: 50px;
                    }
                    h1 {
                        color: #333;
                    }
                    .container {
                        background-color: white;
                        padding: 30px;
                        border-radius: 10px;
                        box-shadow: 0 0 10px rgba(0,0,0,0.1);
                        display: inline-block;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>¡Mi primer servidor Express está funcionando! 🎉</h1>
                    <p>Visita <a href="/about">/about</a> para aprender más</p>
                    <p>O prueba <a href="/api/data">/api/data</a> para ver datos JSON</p>
                </div>
            </body>
        </html>
    `);
});

// Ruta "about" (acerca de)
app.get('/about', (req, res) => {
    res.send(`
        <html>
            <body style="font-family: Arial; padding: 30px;">
                <h1>Acerca de este proyecto</h1>
                <p>Este es mi primer servidor creado con Express.js</p>
                <p><a href="/">← Volver al inicio</a></p>
            </body>
        </html>
    `);
});

// Ruta API que devuelve JSON
app.get('/api/data', (req, res) => {
    res.json({
        mensaje: "Esto es una API REST",
        fecha: new Date().toISOString(),
        endpoints: ["/", "/about", "/api/data"],
        status: "activo"
    });
});

// Ruta para manejar errores 404 (páginas no encontradas)
app.use((req, res) => {
    res.status(404).send(`
        <html>
            <body style="font-family: Arial; padding: 30px; text-align: center;">
                <h1>404 - Página no encontrada</h1>
                <p>La ruta <strong>${req.url}</strong> no existe</p>
                <p><a href="/">Ir al inicio</a></p>
            </body>
        </html>
    `);
});

// 5. Iniciar el servidor
app.listen(PORT, () => {
    console.log(`✅ Servidor Express corriendo en:`);
    console.log(`   🔗 http://localhost:${PORT}`);
    console.log(`   🔗 http://localhost:${PORT}/about`);
    console.log(`   🔗 http://localhost:${PORT}/api/data`);
    console.log(`\nPresiona Ctrl + C para detener el servidor`);
});

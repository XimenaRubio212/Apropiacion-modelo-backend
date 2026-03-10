/**
 * PUNTO C: APROPIACIÓN - CONFIGURACIÓN DEL SERVIDOR
 * Este archivo es el punto de entrada de la aplicación.
 * Se encarga de inicializar Express, configurar middlewares y centralizar las rutas.
 */

import express from 'express';

// Importación de enrutadores (Se mantiene la estructura espejo del ejemplo)
// import userRouter from './routes/users.routes.js'; 
import pqrsRouter from './routes/pqrsRoutes.js';

const app = express();
const port = 3000;

/**
 * CONFIGURACIÓN DE MIDDLEWARES
 * Estos procesan la información antes de que llegue a las rutas.
 */

// Middleware para entender datos en formato JSON (Muy importante para Postman)
app.use(express.json()); 

// Middleware para entender datos de formularios (x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true })); 

/**
 * DEFINICIÓN DE RUTAS BASE
 * Se asignan prefijos a los módulos para organizar la API.
 */

// app.use('/users', userRouter); // Ruta para el módulo de usuarios

// Prefijo /api/pqrs para todas las operaciones de Peticiones, Quejas, Reclamos y Sugerencias
app.use('/api/pqrs', pqrsRouter);

/**
 * INICIALIZACIÓN DEL SERVICIO
 * Escucha peticiones en el puerto definido y confirma el estado en consola.
 */
app.listen(port, () => {
  console.log(`Servidor corriendo exitosamente en http://localhost:${port}`);
});
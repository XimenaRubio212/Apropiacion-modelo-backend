/**
 * ENRUTADOR DE PQRS
 * Este archivo define los "puntos de enlace" (endpoints) de la API y los 
 * vincula con las funciones lógicas del controlador.
 */
import express from 'express';
import { 
    obtenerTodosPQRS, 
    obtenerPQRSporId, 
    crearPQRS, 
    actualizarPQRS, 
    eliminarPQRS 
} from '../controllers/pqrsController.js';

// Inicialización del router de Express
const pqrsRouter = express.Router();

/**
 * DEFINICIÓN DE RUTAS (Prefijo configurado en app.js: /api/pqrs)
 */

// Ruta para obtener el listado completo de PQRS
pqrsRouter.get('/', obtenerTodosPQRS);

// Ruta para obtener una PQRS específica mediante su ID
pqrsRouter.get('/:id', obtenerPQRSporId);

// Ruta para crear un nuevo registro de PQRS
pqrsRouter.post('/', crearPQRS);

// Ruta para modificar una PQRS existente según su ID
pqrsRouter.put('/:id', actualizarPQRS);

// Ruta para eliminar una PQRS del sistema según su ID
pqrsRouter.delete('/:id', eliminarPQRS);

// Exportación por defecto para ser importado en app.js
export default pqrsRouter;
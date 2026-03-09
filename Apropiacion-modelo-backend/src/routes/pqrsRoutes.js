// import express from 'express';
// const router = express.Router();
// import {crearPQRS, eliminarPQRS} from '../controllers/pqrsController.js';

// router.post('/pqrs', crearPQRS);

// router.delete('/pqrs/:id', eliminarPQRS);

// router.get('/pqrs', (req, res) => {
//     res.json({
//         mensaje: "Bienvenido a la API de PQRS",
//         estado: "Servidor funcionando correctamente",
//         puntos_de_enlace: ["/registrar (POST)", "/eliminar/:id (DELETE)"]
//     });
// });

// export default router;

import express from 'express';
const router = express.Router();
import { obtenerTodosPQRS, obtenerPQRSporId, crearPQRS, eliminarPQRS } from '../controllers/pqrsController.js';

//rutas
router.get('/', obtenerTodosPQRS);
router.get('/:id', obtenerPQRSporId);
router.post('/registrar', crearPQRS);
router.put('/actualizar/:id', actualizarPQRS);
router.delete('/eliminar/:id', eliminarPQRS);

export default router;
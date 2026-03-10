/**
 * CONTROLADOR DE PQRS
 * Este archivo actúa como intermediario entre las rutas y el modelo.
 * Se encarga de recibir las peticiones HTTP (req) y enviar las respuestas (res).
 */
import {
    registrarSimulado,
    eliminarSimulado,
    obtenerTodosSimulado,
    obtenerPorIdSimulado,
    actualizarSimulado
} from '../models/pqrsModel.js';

// Lógica para consultar todos los registros (GET)
const obtenerTodosPQRS = (req, res) => {
    const pqrs = obtenerTodosSimulado();
    res
        .status(200)
        .json({
            msn: "lista de PQRS",
            data: pqrs
        });
};

// Lógica para consultar un registro específico por su ID (GET)
const obtenerPQRSporId = (req, res) => {
    const { id } = req.params;
    const pqrs = obtenerPorIdSimulado(id);
    res
        .status(200)
        .json({
            msn: `PQRS con id: ${id} consultada correctamente`,
            data: pqrs
        });
};

// Lógica para crear un nuevo registro (POST)
const crearPQRS = (req, res) => {
    const { titulo, descripcion } = req.body;
    const pqrs = registrarSimulado(titulo, descripcion);
    res
        .status(201)
        .json({
            msn: "PQRS creada correctamente",
            data: pqrs
        });
};

// Lógica para modificar un registro existente (PUT)
const actualizarPQRS = (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion } = req.body; 
    
    // Enviamos los parámetros individualmente para coincidir con la firma del modelo
    const pqrs = actualizarSimulado(id, titulo, descripcion);
    
    res
        .status(200)
        .json({
            msn: `PQRS con id: ${id} modificada correctamente`,
            data: pqrs
        });
};

// Lógica para eliminar un registro del sistema (DELETE)
const eliminarPQRS = (req, res) => {
    const { id } = req.params;
    const resultado = eliminarSimulado(id);
    
    // Verificamos si la operación en el modelo fue exitosa
    if (resultado) {
        res
            .status(200)
            .json({
                msn: `PQRS con id: ${id} eliminada correctamente`,
                data: [{
                    id: id
                }]
            });
    }
};

// Exportación unificada para mantener el estándar de la arquitectura
export {
    obtenerTodosPQRS,
    obtenerPQRSporId,
    crearPQRS,
    actualizarPQRS,
    eliminarPQRS
};
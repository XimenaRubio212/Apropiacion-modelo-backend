// import {registrarSimulado, eliminarSimulado} from '../models/pqrsModel.js';

// export const crearPQRS = (req, res) => {
//     const { titulo, descripcion } = req.body;
//     const respuesta = registrarSimulado(titulo, descripcion);
//     res.status(201).json(respuesta);
// };

// export const eliminarPQRS = (req, res) => {
//     const { id } = req.params;
//     const respuesta = eliminarSimulado(id);
//     res.status(200).json(respuesta);
// };

import {
    registrarSimulado,
    eliminarSimulado,
    obtenerTodosSimulado,
    obtenerPorIdSimulado,
    actualizarSimulado
} from '../models/pqrsModel.js';

//logica para consultar todo (GET)
export const obtenerTodosPQRS = (req, res) => {
    const respuesta = obtenerTodosSimulado();
    res.status(200).json(respuesta);
};

//logica para consultar por ID (GET)

export const obtenerPQRSporId = (req, res) => {
    const { id } = req.params;
    const respuesta = obtenerPorIdSimulado(id);
    res.status(200).json(respuesta);
};

//logica para crear (POST)
export const crearPQRS = (req, res) => {
    const { titulo, descripcion } = req.body;
    const respuesta = registrarSimulado(titulo, descripcion);
    res.status(201).json(respuesta);
};

//logica para actualizar (PUT)
export const actualizarPQRS = (req, res) => {
    const { id } = req.params;
    const datosNuevos = req.body;
    const respuesta = actualizarSimulado(id, datosNuevos);
    res.status(200).json(respuesta);
};

//logica para eliminar (DELETE)
export const eliminarPQRS = (req, res) => {
    const { id } = req.params;
    const respuesta = eliminarSimulado(id);
    res.status(200).json(respuesta);
};
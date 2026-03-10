/**
 * MODELO DE PQRS (Simulado)
 * Este archivo gestiona la lógica de datos para las Peticiones, Quejas, Reclamos y Sugerencias.
 * Se utiliza un bloque try-catch en cada función para asegurar la estabilidad del servidor.
 */

// Obtener todos los registros de PQRS
const obtenerTodosSimulado = () => {
    try {
        const data = [
            {
                id: "1",
                titulo: "Falla de internet",
                descripcion: "No hay conexion en el desarrollo de software"
            },
            {
                id: "2",
                titulo: "Sugerencia",
                descripcion: "Arreglar el techo en el desarrollo de software"
            }
        ];
        return data;
    } catch (error) {
        // En caso de error, retornamos un arreglo vacío para evitar fallos en el controlador
        return [];
    }
}

// Obtener una PQRS específica mediante su ID
const obtenerPorIdSimulado = (id) => {
    try {
        const pqrs = {
            id: id,
            titulo: "Falla de internet",
            descripcion: "No hay conexion en el desarrollo de software"
        };
        return pqrs;
    } catch (error) {
        return [];
    }
}

// Lógica para simular el registro de una nueva PQRS
const registrarSimulado = (titulo, descripcion) => {
    try {
        const pqrs = { titulo, descripcion };
        return pqrs;
    } catch (error) {
        return [];
    }
}

// Lógica para simular la actualización de una PQRS existente
const actualizarSimulado = (id, titulo, descripcion) => {
    try {
        const pqrs = {
            id,
            titulo,
            descripcion
        };
        return pqrs;
    } catch (error) {
        return [];
    }
}

// Lógica para simular la eliminación de una PQRS del sistema
const eliminarSimulado = (id) => {
    try {
        // Retornamos true para confirmar que la operación lógica fue exitosa
        return true;
    } catch (error) {
        return false;
    }
}

// Exportación agrupada para mantener consistencia con el módulo de usuarios
export {
    obtenerTodosSimulado,
    obtenerPorIdSimulado,
    registrarSimulado,
    actualizarSimulado,
    eliminarSimulado
}
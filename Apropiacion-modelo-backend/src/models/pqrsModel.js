// export const registrarSimulado = (titulo, descripcion) => {
//     return { 
//         status: "201", 
//         message: `Registro de PQRS recibido y procesado correctamente con los datos:
//         Titulo: ${titulo}
//         Descripcion: ${descripcion}
//         ` 
//     };
// };

// export const eliminarSimulado = (id) => {
//     return { 
//         status: "200", 
//         message: `La PQRS con ID ${id} ha sido eliminada del sistema (Simulado)` 
//     };
// };

//obtener todos los registros 
export const obtenerTodosSimulado = () => {
    return [
        {
            id: "1",
            titulo: "Falla de internet",
            descripcion: "No hay conexion en el desarrollo de software"
        },
        {
            id: "2",
            titulo: "Sugerencia",
            descripcion: "arreglar el techo en el desarrollo de software"
        }
    ]
};

//obtener un pqrs por id
export const obtenerPorIdSimulado = (id) => {
    return {
        status: "200",
        message: 'Detalle de la PQRS con ID: ${id} obtenidos correctamente',
        id_buscado: id
    }
};

//registro
export const registrarSimulado = (titulo, descripcion) => {
    return {
        status: "201",
        message: `Registro de PQRS recibido y procesado correctamente con los datos:
        Titulo: ${titulo}
        Descripcion: ${descripcion}`
        puntos_de_enlace: ["/actualizar/:id (PUT)", "/eliminar/:id (DELETE)"]
    };
};

//ACTUALIZACION 
export const 


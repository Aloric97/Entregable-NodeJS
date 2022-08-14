
//manejar error en caso de no encontrar la url de la pagina
const notFound = (req, res, next) => {
    const err = new Error("pagina no encontrada");
    err.status = 404;
    return next(err); 
};

//manejar error en caso de que el servidor no responda
const serverError = (req, res, next) => {
    const err = new Error("Error del servidor");
    err.status = 500;
    return next(err);
}



const errorHandler = {
    notFound,
    serverError
};

module.exports = errorHandler;
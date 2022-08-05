// Obtener la fecha actual del servidor
function myDate(req, res, next) {
    req.date = new Date();
    console.log(`Peticion hecha en la fecha:${req.date}`);
    next();
}


let dates = {
    myDate,
};


module.exports = dates;
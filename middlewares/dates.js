// Obtener la fecha actual del servidor
function myDate(req, res, next) {
    req.date = new Date().toLocaleString();
    console.log(`Peticion realizada en la fecha ** ${req.date} - **`);
    next();
}


let dates = {
    myDate,
};


module.exports = dates;
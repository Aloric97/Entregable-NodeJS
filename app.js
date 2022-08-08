
// Definimos los paquetes
const express = require('express');
const app = express();
const logger = require('morgan');

// importar las rutas
const productsRouter = require('./router/productsRouter');
const cartsRouter = require('./router/cartsRouter');
const usersRouter = require('./router/usersRouter');
const dates = require('./middlewares/dates');

// importar los middlewares
const errorHandler = require('./middlewares/errorHandler');

puerto=3000;

// middleware para las fechas
app.use(dates.myDate);

// hacemos uso del middleware morgan para mostrar las solicitudes HTTP
app.use(logger("metodo: " + " :method " + " pagina: " + " :url " + " estado:" + " :status\n"));



// llamamos a todas las rutas de los productos definidas en el productsRouter
app.use(productsRouter);
// llamamos a todas las rutas de carrito definidas en el cartsRouter
app.use(cartsRouter);
// llamamos a todas las rutas de usuarios definidas en el usersRouter
app.use(usersRouter);

// middleware para mandar un mensaje de error en caso de que no se encuentre la ruta
app.use(errorHandler.notFound);
app.use(errorHandler.serverError);


// iniciar servidor
app.listen(puerto, () => {
    console.log(`El servidor se está corriendo en el puerto: ${puerto}\n`);
});
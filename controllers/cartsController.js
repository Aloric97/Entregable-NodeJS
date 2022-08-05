// script para definir el controlador de los productos
const carts = require('../models/cartsModel');


// Se encarga de traer todos los objetos productos
const allcarts = async (req, res) => {
    const carritos = await carts.getCarts();
    res.json(carritos);
};


const cartsController = {
    allcarts
};


module.exports= cartsController;
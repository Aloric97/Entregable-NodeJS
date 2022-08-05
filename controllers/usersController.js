// script para definir el controlador de los productos
const users = require('../models/usersModel');


// Se encarga de traer todos los objetos productos
const allUsers = async (req, res) => {
    const usuarios = await users.getUsers();
    res.json(usuarios);
};


const usersController = {
    allUsers
};


module.exports= usersController;
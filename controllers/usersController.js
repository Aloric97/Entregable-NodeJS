// script para definir el controlador de los productos
const users = require('../models/usersModel');


// Se encarga de traer todos los objetos productos
const allUsers = async (req, res) => {
    const usuarios = await users.getUsers();
    let limit = req.query.limit;

    if (limit) {
        return res.status(200).json(usuarios.slice(0, limit));
    } else {
        return res.status(200).json(usuarios);
    }
};

const userById = async (req, res) => {
    let id = req.params.id;
    const usuario = await users.getUserById(id);
    res.status(200).json(usuario);
};

const threeUsers = async (req, res) => {
    const usuarios = await users.getUsers();

    // primero ordena los ids  con la funcion sort, luego filtra por los tres primeros con la funcion slice
    const order_users = usuarios.sort((a, b) => a.id - b.id).slice(0, 3);
    
    res.status(200).json(order_users);
};


const usersController = {
    allUsers,
    userById,
    threeUsers,
};


module.exports= usersController;
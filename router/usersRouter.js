// script creado para definir las rutas de los usuarios

// paquetes
const express = require('express');
const router = express.Router();
// importar el controlador
const usersController = require('../controllers/usersController');

// Uso del metodo GET para los controladores de los usuarios
router.get('/api/users', usersController.allUsers);
router.get('/api/users/firsts',usersController.threeUsers);
router.get('/api/users/:id', usersController.userById);


// exportamos las rutas de los usuarios
module.exports = router;
// script creado para definir las rutas de los usuarios

// paquetes
const express = require('express');
const router = express.Router();
// importar el controlador
const usersController = require('../controllers/usersController');

// Uso del metodo GET para los controladores de los usuarios
router.get('/api/users', usersController.allUsers);


// exportamos las rutas de los carritos
module.exports = router;
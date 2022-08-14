// script creado para definir las rutas de los productos

// paquetes
const express = require('express');
const router = express.Router();
// importar el controlador
const productsController = require('../controllers/productsController')

// Uso del metodo GET para los controladores de los productos
router.get('/api/products', productsController.allProducts);
router.get('/api/products/price', productsController.productsOrderByPrice);
router.get('/api/products/:id', productsController.productById);
router.get('/api/products/category/:category', productsController.productsByCategory);
router.get('/api/products/category/name/:category', productsController.productsByCategoryOnlyTitle);
router.get('/api/products/category/:category/expensive',productsController.productsMoreExpensive)



// exportamos las rutas de los productos
module.exports = router;
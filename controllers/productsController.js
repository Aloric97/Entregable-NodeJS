// script para definir el controlador de los productos
const products = require('../models/productsModel');


// Se encarga de traer todos los objetos productos
const allProducts = async (req, res) => {
    const productos = await products.getProducts();
    res.json(productos);
};

// Se encarga de traer un objeto producto por id
const productById = async (req, res) => {
    id = req.params.id;
    const producto = await products.getProductsById(id);
    res.json(producto);
};

//devolver un array de objetos que tenga el nombre de la categoria y un array con todos los productos pertenecientes a la categoria
const productsByCategory = async (req, res) => {
    category = req.params.category;
    const productos = await products.getProductsByCategory(category);
    res.json(productos);
};

//EXTRA devolver un array que se ingresa una categoria y me devuela solo los titulo del producto que pertenezcan a esa categoria
const productsByCategoryOnlyTitle = async (req, res) => {
    category = req.params.category;
    const productos = await products.getProductsByCategory(category);
    const titulo = productos.map(producto =>
        producto.title);
    
    res.json(titulo);
};

// EXTRA ordenar los productor por precio de mayor a menor
const productsOrderByPrice = async (req, res) => {
    const productos = await products.getProducts();
    const productosOrdenados = productos.sort((a, b) => b.price - a.price);
    res.json(productosOrdenados);
};

const productsController = {
    allProducts,
    productById,
    productsByCategory,
    productsByCategoryOnlyTitle,
    productsOrderByPrice
};


module.exports= productsController;
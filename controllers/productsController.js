// script para definir el controlador de los productos
const products = require('../models/productsModel');


// Se encarga de traer todos los objetos productos
const allProducts = async (req, res) => {
    let limit = req.query.limit;
    const productos = await products.getProducts();
    if (limit) {
        return res.status(200).json(productos.slice(0, limit));
    } else {
        return res.status(200).json(productos);
    }
};

// Se encarga de traer un objeto producto por id, podemos agregar parametro limit para limitar la cantidad de productos a mostrar
const productById = async (req, res) => {
    let id = req.params.id;
    const producto = await products.getProductsById(id);
    res.status(200).json(producto);
};

//devolver un array de objetos que tenga el nombre de la categoria y un array con todos los productos pertenecientes a la categoria
const productsByCategory = async (req, res) => {
    category = req.params.category;
    const productos = await products.getProductsByCategory(category);
    res.status(200).json(productos);
};
// devolver un array de objetos con solo el id, el titulo y el precio de los productos, ordenados por precio de forma descendente o ascendente
const productsOrderByPrice = async (req, res) => {
    let order = req.query.order;
    const productos = await products.getProducts();
    const product = productos.map(product => {
        // Mostrar un objeto de arreglos con solo su id,titulo y producto
        return {
            id: product.id,
            title: product.title,
            price: product.price
        }});
    if (order === 'asc') {
        // Ordenar de mayor a menor
        let ascendente=product.sort((a, b) => a.price - b.price);
        return res.json(ascendente);
    } else if (order === 'desc') {
        // Ordenar de menor a mayor
        let descendente =product.sort((a, b) => b.price - a.price);
        return res.status(200).json(descendente);
    } else {
        // retornar los productos sin ordenar
        return res.status(200).json(product);
    };
};

//Devolver los productos mas caros (lo tomo como ordenar de mayo a menor) de una categoria
const productsMoreExpensive = async (req, res) => {
    let category = req.params.category;
    const productos = await products.getProductsByCategory(category);
    const expensive = productos.sort((a, b)=> b.price- a.price);

    return res.status(200).json(expensive); 
};

//EXTRA devolver un array que se ingresa una categoria y me devuela solo los titulo del producto que pertenezcan a esa categoria
const productsByCategoryOnlyTitle = async (req, res) => {
    category = req.params.category;
    const productos = await products.getProductsByCategory(category);
    const titulo = productos.map(producto =>
                   producto.title);
    
    return res.status(200).json(titulo);
};




const productsController = {
    allProducts,
    productById,
    productsByCategory,
    productsByCategoryOnlyTitle,
    productsOrderByPrice,
    productsMoreExpensive
};


module.exports= productsController;
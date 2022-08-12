// script para definir el controlador de los productos
const carts = require('../models/cartsModel');
const user =require('../models/usersModel');


// Se encarga de traer todos los objetos carritos
const allcarts = async (req, res) => {
    const carritos = await carts.getCarts();
    let limit = req.query.limit;

    if (limit) {
        return res.status(200).json(carritos.slice(0, limit));
    }
};

// Se encarga de traer un objeto carrito por id, 
const cartById = async (req, res) => {
    let id = req.params.id;
    const carrito = await carts.getCartById(id);
    res.json(carrito);
}

// trae los nombres que compran esos carritos con dos mas de productos
const cartsTwoProducts= async (req, res) => {
    const carrito = await carts.getCarts();
    const usuarios = await user.getUsers();
    const count_carritos = carrito.map(carrito => {
        if (carrito.products.length > 1) {
            let user=usuarios.find(usuario => usuario.id === carrito.id);
            if (user!==null) {
                return {
                    usuario: user.username
                }
            }
    }});
    
    res.json(count_carritos);
}



const cartsController = {
    allcarts,
    cartById,
    cartsTwoProducts
};


module.exports= cartsController;
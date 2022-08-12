const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

// obtenemos todos los objetos carritos

let getCarts =  () => {
    return fetch('https://fakestoreapi.com/carts')
           .then(res=>res.json()
)};

// obtenemos un objeto carrito por su id
let getCartById = (id) => {
    return fetch(`https://fakestoreapi.com/carts/${id}`)
              .then(res=>res.json()
)};




let carts = {
    getCarts,
    getCartById
};



module.exports = carts;
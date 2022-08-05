const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

// obtenemos todos los objetos carritos

let getCarts =  () => {
    return fetch('https://fakestoreapi.com/carts')
           .then(res=>res.json()
)};



let carts = {
    getCarts
};



module.exports = carts;
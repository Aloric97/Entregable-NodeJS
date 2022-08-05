const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))


let getProducts =  () => {
    return  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
};

let getProductsById = (id) => {
    return fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .catch((error)=>console.log(`No existe el id: ${id} que solicitaste\nerror: ${error}`))
};

let getProductsByCategory = (category) => {
    return fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
};

// exportamos los objetos de los productos
let products = {
    getProducts,
    getProductsById,
    getProductsByCategory
};

module.exports = products;


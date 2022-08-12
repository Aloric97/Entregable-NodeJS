const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))


// obtenemos todos los objetos usuarios
let getUsers =  () => {
    return fetch('https://fakestoreapi.com/users')
           .then(res=>res.json()
)};

// obtenemos un objeto usuario por su id

let getUserById = (id) => {
    return fetch(`https://fakestoreapi.com/users/${id}`)
                .then(res=>res.json()
)};


let users={
    getUsers,
    getUserById,
};

module.exports = users;
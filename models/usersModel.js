const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))


// obtenemos todos los objetos usuarios
let getUsers =  () => {
    return fetch('https://fakestoreapi.com/users')
           .then(res=>res.json()
)};

let users={
    getUsers
};

module.exports = users;
const URL = 'https://randomuser.me/api/?results=1';


// 2 METODOS

// PROBLEMATICA
// const saludar = () => {
//   setTimeout( () => {
//     return 'saludo'
//   }, 1000)
// }


// PROMISE
// const saludar = new Promise( (resolve, reject) => {
//   setTimeout( () => {
//     resolve(URL)
//   }, 3000)
// } )

// saludar.then( mensaje => console.log(mensaje))


// ASYNC - AWAIT

const saludar = async () => {
  setTimeout( () => {
    return URL
  }, 3000)
}

const hola = await saludar().then( mensaje => console.log(mensaje))
console.log('fin')












/* Destructuring */
// Recurso do ES6 trazendo algumas funcionalidades

/* criando variáveis por meio da chave de um objeto */
// Podemos criar variáveis por meio da chave de um objeto, desestruturando um objeto.

let person = {
    name:'Thomaz',
    age:18,
    usaOculos:false,
}

let {name, age, usaOculos} = person

console.log(name,age,usaOculos)

let anime = {
    name_anime:'Jujutsu Kaisen',
    category:'Shonen',
    classificação:'16 anos mais'
}

let {name_anime, category, classificação} = anime

console.log(name_anime, category, classificação)


/* Destructuring como array */

// O destructuring funciona com arrays.

let cores = [
    'Amarelo','Branco','cinza','roxo'
]


let [amarelo,branco,cinza,roxo] = cores

console.log(amarelo,branco,cinza,roxo)
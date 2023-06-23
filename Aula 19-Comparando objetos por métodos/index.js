/* Comparando objetos via método */
// Podemos comparar um objetos pelo método is.
// Teremos basicamente o mesmo resultado de ===

let pessoa = {
    name:'thomaz'
}

let pessoa2 = pessoa


console.log(Object.is(pessoa,pessoa2))

/* Exemplo 2 */

function clientes(name){
    return{
        name:name
    }
}

let cliente1 = clientes('thomaz')
let cliente2 = clientes('Lincoln')

console.log(Object.is(cliente1,cliente2))
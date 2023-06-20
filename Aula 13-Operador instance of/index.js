/* Operador instance of */
// Instance of é uma maneira de verificar a instancia pai de um objeto retornando um valor booleano.

// Exemplo usando function construct.
function serie(name){
    this.name
}

let flash = new serie('Flash')

console.log(flash instanceof serie)

// Exemplo com objeto global.
let suits = {
    name:'Suits'
}


console.log(suits instanceof Object)

// Exemplo com função que retorna um objeto.
function person(nome,idade){
    return{
        name:nome,
        age:idade,
    }
}

let personOne = person('Thomaz',18)

console.log(personOne instanceof Object)

// O objeto acima não é instanciada por person porque o objeto ele é retornando e não é classificado como um novo objeto da função. 
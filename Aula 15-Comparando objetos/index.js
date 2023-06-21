/* Comparando objetos */
// Você so consegue ter objetos iguais criando uma referência.
// Objetos criados a partir de um construtor são diferentes.


function Clientes(name,age){
    this.name = name
    this.age = age
}

// Objetos iguais com referência

let thomaz = new Clientes('Thomaz',18)

let Thomas = thomaz

console.log(Thomas === thomaz)


// Objetos diferentes com o construtor

let Lincoln = new Clientes('Lincoln',18)
let Lincoln2 = new Clientes('Lincoln',18)

console.log(Lincoln === Lincoln2)
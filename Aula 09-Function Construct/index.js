/* Functions Construct */
// Função construtora que serve para criar novos objetoss.
// Usamos a expressão new para criar uma novo objeto.

function Pessoa(name,age,weight){
    this.name = name
    this.age = age
    this.weight = weight
}

let cliente1 = new Pessoa("thomaz",18,66.5)

console.log(cliente1)

let cliente2 = new Pessoa('LincolnRP',18,70.4)

console.log(cliente2)
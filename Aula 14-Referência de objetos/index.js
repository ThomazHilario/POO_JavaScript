/* Referência de objetos */
// Quando atribuimos um objeto á uma outra variável,você só está passando a referência.
// Se alterar a referência, também irá alterar a original.


let person = {
    id:1,
}

console.log(person)

let newPerson = person

newPerson.id = 2

console.log(person)
console.log(newPerson)

// Exemplos 2

let teste = {
    numero:1,
}

console.log(teste)

let newTeste = teste

newTeste.numero = 10

console.log(teste)
console.log(newTeste)
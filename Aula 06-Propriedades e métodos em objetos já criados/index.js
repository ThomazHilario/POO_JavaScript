// Os objetos podem ser mutáveis, adicionando mais propriedades e métodos a eles.
// Basta atrelar a variável a uma propriedade e esta mesma recebe um valor.

let person = {
    name:'thomaz',
}

person.age = 18

console.log(person)

// Adicionando métodos ao objeto criado.

person.falar = function(){
    console.log(`Oii!!! meu nome é ${this.name}`)
}

person.falar()
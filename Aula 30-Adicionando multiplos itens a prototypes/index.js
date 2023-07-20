/*
    - Podemos adicionar várias propriedades e métodos ao prototype
*/

function Pessoa(nome,idade){
    this.name = nome
    this.age = idade
}

// Adicionando propriedades e métodos ao prototype

Pessoa.prototype = {
    isStudent:true,
    falar(){
        console.log(`Olá meu nome é ${this.name}`)
    }
}


let thomaz = new Pessoa('Thomaz',18)


// Resultados
console.log(thomaz.isStudent)

thomaz.falar()
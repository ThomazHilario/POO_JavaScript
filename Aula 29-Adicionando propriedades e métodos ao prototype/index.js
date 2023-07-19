function Pessoa(nome,idade){
    this.name = nome
    this.age = idade
}

// Adicionando propriedade
Pessoa.prototype.cabelo = 'preto'

// Adicionando método
Pessoa.prototype.falar = function(){
    console.log(`Olá meu nome é ${this.name}`)
}
// Adicionando método
Pessoa.prototype.suaIdade = function(){
    this.age += 1
}

let Thomaz = new Pessoa('Thomaz',18)

Thomaz.falar()

Thomaz.suaIdade()

console.log(Thomaz)

console.log(Thomaz.cabelo)
/*
    -> Podemos copiar um prototype
    - Ao inves de instanciar um novo objeto passando os seus métodos e atributos para outra classe, podemos copiar o prototype do pai e colocar na classe filha.
*/

function Pessoa(){}

Pessoa.prototype.falar = function(){
    console.log(`Oi eu sou o ${this.name}`)
}

// Criando uma classe filha

function Cliente(nome){
    this.name = nome
}

//copiando o prototype 

Cliente.prototype = Pessoa.prototype

// Instanciando objeto
let Thomaz = new Cliente('Thomaz')

// resultado
Thomaz.falar()
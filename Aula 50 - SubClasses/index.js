/*
    -> subclasses
    - Uma forma de criar herança com classes.
    - Usando a palavra extends, uma classe herda as propriedades de outra.
*/

class Veiculo{
    constructor(){

    }

    ligar(){
        console.log(`O carro ligou`)
    }

    desligar(){
        console.log(`O carro desligou`)
    }
}

class Carro extends Veiculo{
    constructor(name){
        super(name)
        this.name = name
    }
}

// Instanciando objeto
let bmw = new Carro('BMW')

// Resultados
bmw.ligar()
bmw.desligar()
console.log(bmw)
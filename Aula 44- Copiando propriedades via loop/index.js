/*
    -> Copiando propriedades e métodos por loop
    - Ao inves de utilizar o construtor temporário, podemos criar uma função que copie as propriedaddes e métodos por meio de um loop.
*/

function extend(pai,filho){
    let paiPrototype = pai.prototype
    let filhoPrototype = filho.prototype

    for(prop in paiPrototype){
        filhoPrototype[prop] = paiPrototype[prop]
    }

    // Filho tem acesso ao objeto pai
    filho.prototype.uber = pai.prototype
}

// Clasee pai
function Veiculos(){}

Veiculos.prototype.ligar = function(){
    console.log('O veículo ligou')
}

Veiculos.prototype.desligar = function(){
    console.log('O veículo desligou')
}

// Clasee filha: carro
function Carro(name){
    this.name = name
}
// Clasee filha: Moto
function Moto(name){
    this.name = name
}

// Utilizando a função extend

extend(Veiculos,Carro)
extend(Veiculos,Moto)

// Instanciando os objetos
let bmw = new Carro('bmw')
let yamaha = new Moto('yamaha')


// Mudando métodos para as classes moto e carro
Moto.prototype.ligar = function(){
    console.log('A moto ligou')
}

// resultados
bmw.ligar()
yamaha.ligar()
console.log(bmw,yamaha)

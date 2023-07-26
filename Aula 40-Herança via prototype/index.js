/*
    -> Herança via prototype 
    - A ideia de utilizar o prototype é para que cada propriedade ou método adicionado nele não se repita a cada objeto instanciado
    - e tambem não ocupar espaço na memoria por cada objeto criado.
*/

// classe veiculo
function Veiculo(){}

Veiculo.prototype.ligar = function(){
    console.log('O veículo ligou')
}
Veiculo.prototype.desligar = function(){
    console.log('O veículo desligou')
}

// classe carro
function Carro(tipo){
    this.tipo = tipo
}
Carro.prototype = new Veiculo
Carro.prototype.pneus = 4

// Instanciando objeto
let porsche = new Carro('Porsche')

// Resultados
console.log(porsche.pneus)
porsche.ligar()
porsche.desligar()
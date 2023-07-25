/*
    -> fazendo com que uma classe herda os métodos e propriedades da classe pai.
*/
// Criando a classe pai
function Veiculo(){
    this.marcha = 0
    this.ligar = function(){
        console.log('O carro ligou')
    }
    this.PassarMarcha = function(){
        this.marcha += 1
        console.log('A macha está no ' + this.marcha)
    }
    this.desligar = function(){
        console.log('O carro desligou')
    }
}

// Criando uma classe filha de veiculo
function Carro(name){
    this.name = name
}

// Adicionando os métodos e propriedades do veiculo na classe filha carro
Carro.prototype = new Veiculo()

// Instanciando um novo objeto de carro
let bmw = new Carro('BMW')

// Resultados: 
bmw.ligar()
bmw.PassarMarcha()
bmw.desligar()
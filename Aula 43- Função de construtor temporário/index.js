/*
    -> Função de construtor temporário
    - Criar uma função com intuito de utiliza-la para usar o construtor temporário
    - Fazendo isso podemos reutilizar no código
    - Podemos fazer manutenção no código sem alterar o prototype da classe pai
*/

// Função do construtor temporário
function extend(pai,filho){
    let F = function(){}
    F.prototype = pai.prototype
    filho.prototype = new F()
}
//  Classe pai veiculo

function Veiculo(){}

Veiculo.prototype.ligar = function(){
    console.log('O carro ligou')
}

Veiculo.prototype.desligar = function(){
    console.log('O carro desligou')
}

// Classe filho Carro
function Carro(name){
    this.name = name
}

// Utilizando o construtor temporário
extend(Veiculo,Carro)

let bmw = new Carro('bmw')

// Resultados
bmw.ligar()

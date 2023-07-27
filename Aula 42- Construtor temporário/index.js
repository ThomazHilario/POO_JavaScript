/*
    ->Construtor temporário
    - Armazenamento para referências.
    - Intuito de alterar algo sem mudar a alteração na classe original, e sim mudando na variável onde está alocada o prototype.
 */
// Criando uma classe pai
function Pessoa(){}
Pessoa.prototype.falar = function(){
    console.log('oi')
}
Pessoa.prototype.humano = true

// Classe filha de pai no qual irá herdar seus métodos e atributtos
function Cliente(name){
    this.name = name
}

// Criando uma variável que será alocada a referência do pai
let F = function(){}

// Passando a referência de Pessoa para F
F.prototype = Pessoa.prototype

// E passando a referência do F para a Classe cliente
Cliente.prototype = F.prototype

// Instanciando um objeto
let thomaz = new F()

// Resultados
// teste
thomaz.falar()

// Mudando o valor para false
console.log(thomaz.humano = false)

// Mostrando que não alterou o valor para false
console.log(Pessoa.prototype)


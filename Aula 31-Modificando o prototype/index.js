/*
    -> Adicionando prototypes apos instanciar um objeto
    - Podemos modificar o prototype adicionando ou removendo propriedades e métodos ao longo do código apos instanciar um objeto
*/

function Personagem(name,habilidade){
    this.name = name
    this.ability = habilidade
}

Personagem.prototype = {
    tecnica:'Vazio roxo',
    
}

// Instanciando o objeto
let gojo = new Personagem('Satoru Gojo', 'Seis olhos')


// Adicionando apos criar a instancia
Personagem.prototype.especial = function (){
    console.log('Expansão de dominio: Muryo Kushoo')
}

// Resultados
console.log(gojo.tecnica)

gojo.especial()
/* 
    -> Prototype com objeto que possui propriedade
    - Podemos deletar uma propriedade de um objeto, e se tiver o prototype definindo um nome ira sobre escrever o nome do objeto deletado.
*/

function Pessoa(nome){
    this.name = nome
}

// Prototype que tem a propriedade

Pessoa.prototype.name = 'Thomaz'

// Antes de deletar o nome
let pessoa = new Pessoa('Lincoln')

console.log(pessoa.name)


// depois de deletar o nome
delete pessoa.name

console.log(pessoa.name)

// O resultado esperado é o prototype preencher o espaço do objeto name vazio.
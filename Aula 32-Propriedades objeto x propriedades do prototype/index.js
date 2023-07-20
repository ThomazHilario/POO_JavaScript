/*
    -> Propriedades do objeto x propriedades do prototype
    - Caso as propriedades coexistam a propriedades da function tem a prioridades(Objeto)
*/

function Pessoa(nome,idade){
    this.name = nome
    this.age = idade
}

Pessoa.prototype.age = 19

let thomaz = new Pessoa('Thomaz',18)

// O resultado de age será 18 pois o objeto tem prioridade
console.log(thomaz)
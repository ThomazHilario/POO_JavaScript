/*
    -> Verificando se um objeto é prototype de outro objeto
    - isPropertyOf() - podemosusar esta função e verificar se um objeto é prototype de outro objeto.
*/

// Função
function Pessoa(name){
    this.name = name;
}
// Objeto que será o prototyp de Pessoa
let caracteristicas = {
    age:18,
    isStudent:true,
}

// Colocando o as caracteriscas no prototype de Pessoa
Pessoa.prototype = caracteristicas

// Instanciando um novo objeto
let Thomaz = new Pessoa('Thomaz')

// Verificando o resultado
console.log(caracteristicas.isPrototypeOf(Thomaz))
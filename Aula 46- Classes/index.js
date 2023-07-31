/*
    -> Classes
    - São funções do javascript, ou seja só muda a forma de escrever no js, pois a funcionalidade é a mesma.
*/

/* 
    -> Estrutura de uma classe
    - Usamos classes usando a palavra reservada class name: nome da classe.
    - Dentro da classe temos uma function contruct, no qual onde ficará as propriedades.
*/

class Pessoa{
    constructor(name,age){
        this.name = name
        this.age = age
    }
}

// Verificando quea class se comporta como uma função
console.log(typeof Pessoa)

// Instanciando o objeto
let thomaz = new Pessoa('Thomaz',18)

// Resultado é igual ao de uma função normal com parâmetros
console.log(thomaz)

/*
    -> Percorrendo objetos
    - Podemos percorrer um objeto usando a estrutura de repetição for in
*/

function Pessoa(name,age,student){
    this.name = name;
    this.age = age;
    this.student = student;
}

let Thomaz = new Pessoa('Thomaz',18,true)

for(let newThomaz in Thomaz){
    // pegando a propriedade
    // -> newThomaz

    // Pegando os valores da propriedade
    // -> Thomaz[newThomaz]

    console.log(`${newThomaz} -> ${Thomaz[newThomaz]}`)
}
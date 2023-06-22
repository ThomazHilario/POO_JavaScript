/* Object Literals */
// Função do ES6, que premite criar objetos mais rápido.
// Aproveita o nome das variáveis como chave, e o valor da variável como valor do objeto.

let name = 'thomaz'
let age = 18

let person = {
    name,
    age
}

console.log(person)

// Podemos escrever propriedades com valores de variáveis ou retorno de funções.
// Ajuda a escrever menos código.

let genero = 'Gênero'

let jujutsuKaisen = {
    ['Tipo_de_' + genero]:'Shonen'
}

console.log(jujutsuKaisen.Tipo_de_Gênero)

let Gintama = {
    ['Tipo_de_' + genero]:'Shonen'
}

console.log(Gintama.Tipo_de_Gênero) 


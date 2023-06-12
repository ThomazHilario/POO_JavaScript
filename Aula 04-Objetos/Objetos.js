/* O que é um objeto ? */
// Um tipo de dado que possui duas características.
// Propriedades:Caraterísticas do objeto.
// Métodos:Ações do objeto.

/* Criando um objetos */
// Podemos criar um objetos declarando chaves.
// Podemos atribuir este objeto a uma variável.
// O objeto possui chave e valor.

let pessoa = {
    name:'Thomaz',
    age:18,
    weight:66.5,
}


console.log(pessoa)

/* Propriedades de um objeto */
// As propriedades são as características de um objeto.
// Podemos acessar os valores do objeto.

let carro = {
    portas:4,
    cor:'Azul  platinado',
    revisado:true,
}

console.log(carro.portas)
console.log(carro['cor'])

/* Tipos de dados das propriedades */
// As propriedades aceitam qualquer tipo de dados do JavaScript.(string,number,boolean,array)
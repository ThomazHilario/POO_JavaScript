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


/* Propriedades com mais de uma palavra */
// Podemos escrever a chave da propriedade com mais de uma palavra.
// Porem ao acessar devemos usar variável['chave'].
// Não é muito Utilizado.

let student = {
    'name for student':'Thomaz',
    'Age for Student': 18
}

console.log(student['name for student'] + '\n' + student['Age for Student'])


/* Acessando propriedades por meio de uma variável */
// Podemos acessar a propriedade de um objeto declarando uma variável que recebe o nome da propriedade.
// Acessamor por meio da variável['variável com nome da propriedade'].
// usaremos o exemplo student acima.

const nameStudent = 'name for student'

console.log(student[nameStudent])
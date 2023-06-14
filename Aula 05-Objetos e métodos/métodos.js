/* Métodos */
// Métodos são as ações dos objetos.
// Podemos ter métodos de resgatar as propriedades do objeto ou mudar o valor delas.
// Para declacar um método devemos usar na chave um nome e no valor a função.
// Os métodos podem realizar qualquer operação que uma função realiza.

let pessoa = {
    name: 'Thomaz',
    age: 18,
    falar: function(){
        console.log(`Oi!! meu nome é ${this.name}`)
    },
    incrementarIdade(){
        this.age += 1
    },
    newName(name){
        this.name = name
    }
}

pessoa.falar()
pessoa.incrementarIdade()
pessoa.incrementarIdade()

console.log(pessoa.age)

pessoa.newName('Lincoln')

console.log(pessoa.name)

let calculadora = {
    result:0,
    somar(a,b){
        this.result = a + b 
    },
    subtrair(a,b){
        this.result = a - b
    }
}

calculadora.subtrair(5,5)

console.log(calculadora.result)

/* Objetos dentro de objetos */
// Como o objeto é um tipo de dado,podemos ter um objeto como valor de uma propriedade.

let student = {
    name:'Thomaz',
    caracteristicas:{
        cabelo:'preto',
        olhos:'castanhos escuros',
        brinco: false,
        oculos: false,
        lentesDeContato: true,
    },
    inSchool:{
        livros: true,
        Farda : true,
        shootsBlack: true,
    }
}
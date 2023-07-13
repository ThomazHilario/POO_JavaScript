/*
    -> built in objects
    - Objetos que vem do javascript
    - São metodos e propriedades que ja tem nativamente para cada tipo de dado no javascript.(Prototypes)
    - Ao criarmos uma variável com qualquer tipo de dado,esta mesma ja é um objeto possuindo suas propriedades e métodos.
*/

/*
    -> array
    - O objeto pai de todos
    - podemos instancia um array usando new
    - Também possui propriedades e métodos
    - Os métodos mais usados são: unshift(), push(), pop(), shift(), join()
*/

const array1 = new Array(0,1,2)
const array2 = [3,4,5]
const array3 = new Array(6,7,8)

console.log(array1,array2,array3)

//Colocando um número no final do array

array3.push(9)

console.log(array3)

// removendo o número no final do array

array3.pop()

console.log(array3)


/* 
    -> Funções

    - As funções também são objetos pai do object.
    - Podemos usar length em uma função para ver quantos parâmetros ela possui.
    - Podemos utilizar métodos call e apply das funções.
    - Call pega métodos emprestado de objetos.
    - O aplly funciona da mesma forma que o call, porem os seus parâmetros são transformados em array.


*/


let cliente1 = {
    name:'Thomaz',
    Falar(){
        console.log(`Olá meu nome é ${this.name}`)
    },
}

cliente1.Falar()

let cliente2 = {
    name:'Lincoln'
}

// Vamos utilizar o método call para pegar o método falar emprestado

cliente1.Falar.call(cliente2)



/*
    -> Number
    - O objeto number pode ser tratado com:
    - parseInt(): Transforma número em inteiro.
    - parseFloat(): Transforma número em ponto flutuante.
*/

let numberOne = '12.14'
let numberTwo = '12.14'

console.log(parseInt(numberOne))
console.log(parseFloat(numberTwo))

let number = 17.348900

// toFixed() -> Escolhe quantas casas decimais quer após a virgula

console.log(number.toFixed(2))

// toPrecision() -> Mesma função do toFixed() porem de forma mais precisa

console.log(number.toPrecision(3))

// toExponential() -> tras o exponencial do número

console.log(number.toExponential())
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

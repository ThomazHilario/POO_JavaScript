/*
    -> RegExp
    - Objeto para tratar expressões regulares
    - Podemos utilizar métodos como text() e exec()
    - Encontrar padrões em strings
*/

// verificando se as strings tem a letra o

let regex = new RegExp("o")

console.log(regex.test('Thomaz'))
console.log(regex.test('luiz'))
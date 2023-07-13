/*
    -> String
    - objeto do Object
    - Podemos saber quantas letras tem em uma frase ou texto usando length.
    - Colocar um texto com caixa grande usando toUpperCase() ou caixa baixa usando toLowerCase().
    - Podemos saber a letra por meio da posição usando charAt(), passando um número que vai mostrar a letra da posição.
    - Podemos usar o indexOf() Para saber a posição de uma letra.
    - Podemos usar o slice(inicial,final) para pegar uma certa parte da palavra, ou o subString(inicial,final)
    - Split() transforma uma string em um array 
*/

const text = 'Thomaz'

console.log(text.length)

// Usando toLowerCase()

console.log(text.toLowerCase())

// Usando o toUpperCase()

console.log(text.toUpperCase())

// Usando chatAt() 

console.log(text.charAt(3))

// Usando indexOf()

console.log(text.indexOf('z'))

// Usando slice()

console.log(text.slice(0,5))

// Usando o substring()

console.log(text.substring(0,6))

// Usando o split()

console.log(text.split(''))
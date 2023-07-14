/* 
    -> Date
    - Objeto que lida com datas
    - Podemos criar uma nova data a partir de agora
    - ou a partir da data que precisamos
*/

// Mostrando a data de hoje

console.log(new Date())

// Criando uma data

console.log(new Date(2024,2,15))

/*
    -> métodos atrelados ao new Date
    - getHours() - ver as horas atualmente
    - getMinutes() - ver os minutos atualmente
    - getSeconds() - ver os segundos atualmente
    - now() - ver os milissegundos da data de hoje
    - parse() - transforma uma data legivel em milissegundos
*/

let date = new Date()

// métodos para ver as horas, minutos, segundos

// Horas
console.log(date.getHours())
// Minutos
console.log(date.getMinutes())
// Segundos
console.log(date.getSeconds())

// now()

console.log(new Date(Date.now()))

// Date.parse()

console.log(Date.parse(new Date(Date.now())))
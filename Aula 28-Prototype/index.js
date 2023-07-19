/* 
    -> Prototype
    - Todo objeto javascript possui propriedades e métodos nativamente para cada tipo de dado, isso porque essas propriedades e métodos, vem do objeto pai o prototype.

*/


/*
    -> A propriedade prototype
    - Toda função criada tem um prototype, no qual podemos adicionar propriedades e métodos para usarmos posteriormente
*/

function teste(){
    console.log('teste')
}

// Adicionando uma propriedade ao prototype
teste.prototype.teste = 1

// Vendo o prototype da função
console.log(teste.prototype)
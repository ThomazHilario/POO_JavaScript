// Crie dois objetos que compartilhem nomes de propriedades via object literals.
// Uma variável deve definir a parte que se repete nas propriedades do objeto.

let n = 'numero_de_'

let audi = {
    name:'Audi',
   [n + 'portas']:2,
   [n + 'rodas']:4
}

let posche = {
    name:'Posche',
    [n + 'Portas']: 4,
    [n + 'rodas']:4,
}

console.log(posche)
console.log(audi)
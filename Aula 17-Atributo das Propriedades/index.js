/* Atributo das propriedades */
// Toda propriedade tem atributos criados pela linguage Javascript,como Enumerable e configurable.
// No caso da configurable se estiver false,esta propriedade não pode ser editada ou deletada.
// usamos Object.getOwnPropertyDescriptor(Objeto, 'chave do objeto entre aspas') no console para verificar os atributos do objeto.

let pessoa = {
    name:'Thomaz'
}

console.log(Object.getOwnPropertyDescriptor(pessoa, 'name'))
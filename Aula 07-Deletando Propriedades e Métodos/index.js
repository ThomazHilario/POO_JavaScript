// Podemos deletar propriedades e métodos de um objeto.

let person = {
    name:'thomaz',
    age:18,
    nariz:false,
    gritar(){
        console.log('AHHAAAAAAAAAAAAAAA')
    }
}
// Executando com a chave existente.

console.log(person)

delete person.nariz
delete person.gritar
// Executando o objeto sem a chave nariz. 

console.log(person)
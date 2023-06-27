// Crie um objeto pessoa com uma propriedade name.
// E crie uma função que exiba o nome do objeto pessoa.

const person = {
    name:'Thomaz',
    viewName(){
        console.log(this.name)
    }
}

person.viewName()
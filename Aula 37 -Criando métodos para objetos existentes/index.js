/*
    -> Podemos criar métodos para objeto já existente.
    - Porem não é uma execelnte idéia pois futuramente possa existeir uma função com o mesmo nome porem fazendo outra tarefa.
*/

Array.prototype.removeLastElement = function(){
    return this.pop()
}

let list = ['Thomaz','Lincoln','Luiz','Anderson','VH','Rogi','Arthur']

list.removeLastElement()

console.log(list)
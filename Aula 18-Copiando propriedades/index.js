/* Copiando propriedades */
// Os objetos herdam métodos do pai Object, assim podemos utiliza-los.
// Para copiar uma propriedade utilizamos o método assign(objeto receberá a copia,objeto que passará a copia).

let person = {
    name: 'Thomaz',
    age:12,
}


person2 = {
    incrementaridade(){
        this.age += 1
    }
} 

Object.assign(person2,person)

console.log(person2)


person2.incrementaridade()
person2.incrementaridade()
person2.incrementaridade()
person2.incrementaridade()
person2.incrementaridade()
person2.incrementaridade()

console.log(person2)
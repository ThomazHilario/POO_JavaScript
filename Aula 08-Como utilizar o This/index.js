// O this dentro de um objeto vai se referir a própria instância.
// Utilizado para resgatar propriedades em um métodos.

let person = {
    name:'thomaz',
    age:18,
    isStudent:true,
    characters:{
        hair:'black',
        eyes:'Brown',
        usingGlasses:false,
    },
    talk(newColor){
        this.characters.hair = newColor
        console.log(`Ola meu nome é ${this.name} e eu tenho ${this.age} anos,meu cabelo é ${this.characters.hair}.`)
    }
}

person.talk('Preto')
/*
    -> Verificando se em um objeto tem uma propriedade específica
    - hasOwnProperty() - permite verificar se um objeto tem uma propriedade específica retornando um boolean.
*/

function Anime(name,category){
    this.name = name;
    this.category = category;
}

Anime.prototype.person = 'ichigo'

let bleach = new Anime('Bleach','Shonen')

// Verificando se o objeto tem uma propriedade específica

console.log(bleach.hasOwnProperty('name'))

// Verificando se o prototype tem uma propriedade específica

console.log(bleach.constructor.prototype.hasOwnProperty('person'))


/*
    -> Podemos com essas informações fazer uma lógica para ver se a propriedade é do objeto ou do prototype
*/

// Crie uma função que retonar se a propriedade esta no objeto,no prototype ou ela não existe


function verifyProperty(obj,property){
    if(obj.hasOwnProperty(property)){
        return 'Esta propriedade é do objeto'
    } else if(obj.constructor.prototype.hasOwnProperty(property)){
        return "Esta propriedade é do prototype"
    } else{
        return 'Esta propriedade não existe'
    }
}

// Verificando o resultado da função
console.log(verifyProperty(bleach,'name'))
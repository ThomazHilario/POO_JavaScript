/* Propriedade Constructor */

// Quando um objeto é criado,sempre á uma propriedade constructor adicionanada a ele.
// Contendo a referência de como o objeto foi criado.


function animeList(nome,gênero){
    return{
        name:nome,
        category:gênero,
    }
}

const anime1 = animeList('Jujutsu Kaisen','Shonen')

console.log(anime1.constructor)


const anime2 = {
    name:'Horimiya',
    category:'Romance'
}

console.log(anime2.constructor)
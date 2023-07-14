/*
    -> Error
    - objeto para lidar/tratar com error.
    - é um erro programado pelo programador.
*/

// Crie uma função que recebe um argumento do tipo number caso não seja do tipo number imprima um Error

function verifyType(value){
    if(typeof value != 'number'){
        throw new Error('Dado inválido') 
    } else{
        return value
    }
}

try{
    let dado = verifyType(true)
}catch(e){
    console.log(`${e.name}: ${e.message}`)
}
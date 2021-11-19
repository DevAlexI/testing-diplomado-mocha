//crear una funcion que me diga si todos los numeros son pares en un array con SI/NO


const isEvenNumber = (numbers) => {
    let activator = 0;

    for(let num of numbers){
        if(num % 2 != 0){
            activator += 1;
        }
    }
    
    if(activator > 0){
        return false;
    }

    return true;
}

module.exports = {isEvenNumber};
//* crear una funcion que me ordene numeros dado un array
const sorting = (numbers) => {

    let activator = 0;

    for(let num of numbers){
        if(!Number.isInteger(num) || !Number.isFinite(num)){
            activator += 1;
        }
    }

    if(activator > 0){
        return 'datos incorrectos';
    }

    return numbers.sort();
}

module.exports = {sorting};
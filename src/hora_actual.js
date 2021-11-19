//* escribir una funcion que me retorne la hr actual
const getTime = (date) => {
    let today = new Date();
    if(date == (today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear())){
        return today.getHours();
    } else {
        return 'fecha mal ingresada';
    }
}


module.exports = {getTime};
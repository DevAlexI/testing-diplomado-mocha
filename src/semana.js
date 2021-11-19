//* escribir una funcion que dado un numero me retorne el dìa de la semana, comenzando con domingo
const selDay = (num) => {
    let days = ['Domingo',
                'Lunes',
                'Martes',
                'Miercoles',
                'Jueves',
                'Viernes'];

    if(num >= 0 && num <= days.length){
        return days[num];
    } else {
        return 'Selecciona un numero entre 0 y 6';
    }
}

module.exports = {selDay};
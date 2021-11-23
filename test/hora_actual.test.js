const chai = require('chai');
const expect = chai.expect;

const hour = require('../src/hora_actual');

describe('Ejercicio obtener la hora actual', () => {
    /*describe('La hora actual es correcta ingresando el día actual', () => {
        it('Tomando en cuenta la hora actual', () => {
            let today = new Date();
            expect(hour.getTime('18/11/2021')).to.equal(today.getHours());
        });
    });*/
    describe('La hora actual no es correcta', () => {
        it('La hora actual es incorrecta por ingresar mal el día', () => {
            expect(hour.getTime('13/8/2021')).to.equal('fecha mal ingresada');
        });
        it('La hora actual es incorrecta por ingresar mal el día', () => {
            expect(hour.getTime('13/3/2021')).to.equal('fecha mal ingresada');
        });
        it('La hora actual es incorrecta por ingresar mal el día', () => {
            expect(hour.getTime('5/1/2021')).to.equal('fecha mal ingresada');
        });
        it('La hora actual es incorrecta por ingresar mal el día', () => {
            expect(hour.getTime('hola mundo')).to.equal('fecha mal ingresada');
        });
        it('La hora actual es incorrecta por ingresar mal el día', () => {
            expect(hour.getTime(5)).to.equal('fecha mal ingresada');
        });
    });
})
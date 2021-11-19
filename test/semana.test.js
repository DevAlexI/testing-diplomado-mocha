const chai = require('chai');
const expect = chai.expect;

const week = require('../src/semana');

describe('Ejercicio día de la semana dado numero', () => {
    describe('El numero es entre 0 y 6', () => {
        it('0 = Domingo', () => {
            expect(week.selDay(0)).to.equal('Domingo');
        });
        it('2 = Martes', () => {
            expect(week.selDay(2)).to.equal('Martes');
        });
        it('5 = Viernes', () => {
            expect(week.selDay(5)).to.equal('Viernes');
        });
    });
    describe('El numero NO está entre 0 y 6', () => {
        it('10 = fuera del rango', () => {
            expect(week.selDay(10)).to.equal('Selecciona un numero entre 0 y 6');
        });
        it('15 = fuera del rango', () => {
            expect(week.selDay(15)).to.equal('Selecciona un numero entre 0 y 6');
        });
        it('100 = fuera del rango', () => {
            expect(week.selDay(100)).to.equal('Selecciona un numero entre 0 y 6');
        });
    });
})
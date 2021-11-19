const chai = require('chai');
const expect = chai.expect;

const lengthh = require('../src/Longitud_String');

describe('Ejercicio longitud de texto', () => {
    describe('Test length', () => {
        it('Hola mundo', () => {
            expect(lengthh.measure('Hola mundo')).to.equal(10);
        });
        it('Isasi', () => {
            expect(lengthh.measure('Isasi')).to.equal(5);
        });
        it('Estados Unidos de America', () => {
            expect(lengthh.measure('Estados Unidos de America')).to.equal(25);
        });
    })
});

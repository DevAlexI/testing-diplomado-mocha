const chai = require('chai');
const expect = chai.expect;

const pares = require('../src/pares');


describe('Ejercicio pares', () => {
    describe('Los numeros son pares', () => {
        it('10 verificacion', () => {
            expect(pares.pairing(10)).to.equal(true);
        });
        it('24 verificacion', () => {
            expect(pares.pairing(24)).to.equal(true);
        });
        it('8 verificacion', () => {
            expect(pares.pairing(8)).to.equal(true);
        });
    });
    describe('Los numeros son impares', () => {
        it('7 verificacion', () => {
            expect(pares.pairing(7)).to.equal(false);
        });
        it('9 verificacion', () => {
            expect(pares.pairing(9)).to.equal(false);
        });
        it('3 verificacion', () => {
            expect(pares.pairing(3)).to.equal(false);
        });
    });
});
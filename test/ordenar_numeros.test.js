const chai = require('chai');
const expect = chai.expect;

const numb = require('../src/ordenar_numeros');

describe('Ejercicio ordenamiento de numeros', () => {
    /*describe('Los numeros son ordenados correctamente', () => {
        it('-25,4.12,7,10', () => {
            expect(numb.sorting([1, 10, 2, 21])).to.equal([1, 10, 2, 21]);
        });
        it('99,100,110,4', () => {
            expect(numb.sorting([99,100,110,4])).to.equal([100, 110, 4, 99 ]);
        });
        it('10,4,-12,0.23', () => {
            expect(numb.sorting([10,4,-12,0.23])).to.equal([-12,0.23,4,10]);
        });
    });*/

    describe('Los numeros son ordenados incorrectamente', () => {
        it('holi, 0.74, 13', () => {
            expect(numb.sorting(['holi', 0.74, 13])).to.equal('datos incorrectos');
        });
        it('11, 18/12/2020, tt', () => {
            expect(numb.sorting([11, '18/12/2020', 'tt'])).to.equal('datos incorrectos');
        });
        it('10, hola mundo', () => {
            expect(numb.sorting([10, 'hola mundo'])).to.equal('datos incorrectos');
        });
    });
});
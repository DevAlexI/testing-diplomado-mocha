const chai = require('chai');
const expect = chai.expect;

const todosPares = require('../src/Todos_Pares');

describe('Ejercicio array de numeros', () => {
    describe('El array SI contiene sólo números pares', () => {
        it('10,20,30,40', () => {
            expect(todosPares.isEvenNumber([10,20,30,40])).to.equal(true);
        });
        it('100,200,300,400', () => {
            expect(todosPares.isEvenNumber([100,200,300,400])).to.equal(true);
        });
        it('24,8,2,4', () => {
            expect(todosPares.isEvenNumber([24,8,2,4])).to.equal(true);
        });
    });

    describe('El array NO contiene sólo números pares', () => {
        it('10,20,27,40', () => {
            expect(todosPares.isEvenNumber([10,20,27,40])).to.equal(false);
        });
        it('100,5,300,400', () => {
            expect(todosPares.isEvenNumber([100,5,300,400])).to.equal(false);
        });
        it('24,8,17,4', () => {
            expect(todosPares.isEvenNumber([24,8,17,4])).to.equal(false);
        });
    });
});
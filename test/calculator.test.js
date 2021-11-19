const chai = require('chai');
const expect = chai.expect;

const calculator = require('../src/calculator');

describe('Calculator', () => {
    describe('Suma', () => {
        it('suma de dos numeros', () => {
            expect(calculator.add(2,4)).to.equal(6);
            expect(calculator.add(4,4)).to.equal(8);
            expect(calculator.add(12,102)).to.equal(114);
            expect(calculator.add(32,30)).to.equal(62)
            .to.be.a('number');
        });
    });

    describe('Multiplicacion', () => {
        it('multiplicacion de dos numeros', () => {
            expect(calculator.multiply(2, 2)).to.be.equal(4);
            expect(calculator.multiply(3, 2)).to.be.equal(6);
            expect(calculator.multiply(1, 2)).to.be.equal(2);
            expect(calculator.multiply(90, 87)).to.be.equal(7830);
        });
    });

    describe('Division', () => {
        it('division de dos numeros', () => {
            expect(calculator.divide(2, 2)).to.be.equal(1);
            expect(calculator.divide(4, 2)).to.be.equal(2);
            expect(calculator.divide(8, 2)).to.be.equal(4);
            expect(calculator.divide(100, 50)).to.be.equal(2);

        });
    });

    describe('Resta', () => {
        it('resta de dos numeros', () => {
            expect(calculator.subtract(2, 2)).to.be.equal(0);
            expect(calculator.subtract(1000, 2)).to.be.equal(998);
            expect(calculator.subtract(9999, 2)).to.be.equal(9997);
            expect(calculator.subtract(10, 3)).to.be.equal(7);

        });
    });
});

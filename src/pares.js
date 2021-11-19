//* crear una funcion para verificar numeros pares (verificar con SI/NO) y escribir su test

const pairing = (num) => {
    if(num % 2 == 0) {
        return true;
      }
      else {
        return false;
      }
}

module.exports = {pairing};
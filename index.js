/**
 *  Para ejecutar script en terminal escribir:
 *  node index.js
 */
const arrayPrueba = [3, 73410, 35445, 14538, 9005, 75];

function Comparacion(param) {
  const primeraCondicion = param % 3 === 0 && param % 5 === 0;
  const segundaCondicion = param % 5 === 0 || param.toString().includes(5);
  const terceraCondicion = param % 3 === 0 || param.toString().includes(3);
  if (primeraCondicion) {
    return "FizzBuzz";
  }
  if (segundaCondicion) {
    return "Buzz";
  }
  if (terceraCondicion) {
    return "Fizz";
  }
  if (primeraCondicion && segundaCondicion) {
    return "FizzBuzz - Buzz";
  }
  if (segundaCondicion && terceraCondicion) {
    return "Buzz Fizz";
  }
  if (primeraCondicion && terceraCondicion) {
    return "FizzBuzz Fizz";
  }
  return "No se cumple ninguna condicion";
}

const prueba = arrayPrueba.map(res => Comparacion(res));
console.log(prueba);

// Curso de Engenharia de Software - UniEVANGÉLICA 
// Disciplina de Programação Web 
// Dev: Pedro Wilson Rodrigues de Lima
// DATA 21/03/2023




function reverseString(str) {
  return str.split("").reverse().join("");
}

// Exemplo de uso abaixo:
const str = "Com grandes poderes vem grandes responsabilidades";
console.log(reverseString(str)); // ficará assim --> "sedadilibasnopser sednarg mev seredop sednarg moC"




function sumMatrix(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}

// Exemplo de uso abaixo:
const matrix = [[11, 21, 43], [34, 25, 66], [87, 58, 99]];
console.log(sumMatrix(matrix)); // Será igual a 444




function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Exemplo de uso abaixo:
const num = 7;
console.log(isPrime(num)); // true
// Curso de Engenharia de Software - UniEVANGÉLICA 
// Disciplina de Programação Web 
// Dev: Pedro Wilson Rodrigues de Lima
// DATA 21/03/2023




function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Exemplo de uso abaixo: 
const arr = [57, 24, 82, 13, 68, 40, 91];
console.log(bubbleSort(arr)); // ficará assim: 13, 24, 40, 57, 68, 82, 91




function calcularMedia(nums) {
  const n = nums.length;
  let soma = 0;
  for (let i = 0; i < n; i++) {
    soma += nums[i];
  }
  return soma / n;
}

// Exemplo de uso abaixo:
const nums = [8, 3, 1, 5, 9];
console.log(calcularMedia(nums)); // Será igual a 5.2




function fatorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * fatorial(num - 1);
}

// Exemplo de uso abaixo:
const num = 8;
console.log(fatorial(num)); // Será igual a: 40320




function countWords(str) {
  return str.trim().split(/\s+/).length;
}

// Exemplo de uso:
const str = "Com grandes poderes vêm grandes responsabilidades";
console.log(countWords(str)); // São 6 palavras nessa frase
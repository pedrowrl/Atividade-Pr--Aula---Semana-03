// Curso de Engenharia de Software - UniEVANGÉLICA 
// Disciplina de Programação Web 
// Dev: Pedro Wilson Rodrigues de Lima
// DATA 21/03/2023




function longestWord(str) {
    const words = str.split(/\s+/);
    let longest = "";
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longest.length) {
        longest = words[i];
      }
    }
    return longest;
  }
  
  // Exemplo de uso abaixo:
  const str = "Com grandes poderes vem grandes responsabilidades";
  console.log(long
  
  
  
  
  function fatorial(num) {
    if (num === 0) {
      return 1;
    }
    return num * fatorial(num - 1);
  }
  
  // Exemplo de uso abaixo:
  const num = 5;
  console.log(fatorial(num)); // será 120
  
  
  
  
  function fibonacci(num) {
    if (num <= 1) {
      return [0, 1].slice(0, num + 1);
    } else {
      let fib = fibonacci(num - 1);
      fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
      return fib;
    }
  }
  
  // Exemplo de uso abaixo:
  const num = 8;
  console.log(fibonacci(num)); // [0, 1, 1, 2, 3, 5, 8, 13, 21]
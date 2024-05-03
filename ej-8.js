// Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

// Puedes usar este array para probar tu función:
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(avengers) {
  let number=0;
  let palabra="";
  for (const avenger of avengers) {
    if (number<avenger.length) {
        number=avenger.length;
        palabra=avenger;
    }
  }
  return palabra;
}
console.log(findLongestWord(avengers))

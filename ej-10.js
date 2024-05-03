// Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numbers) {
  media=numbers.length;
  num=0;
  for (const number of numbers) {
    num+=number;
  }
  return num/media;
}
console.log(average(numbers));
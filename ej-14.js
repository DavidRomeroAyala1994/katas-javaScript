// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:
const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(palabras, letras) {
    let palabrasEncontradas = [];
    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        let contieneTodasLasLetras = true;
        for (let j = 0; j < letras.length; j++) {
            let letra = letras[j];
            if (!palabra.includes(letra)) {
                contieneTodasLasLetras = false;
                break;
            }
        }
        if (contieneTodasLasLetras) {
            palabrasEncontradas.push(palabra);
        }
    }
    return palabrasEncontradas;
  }

  console.log(repeatCounter(counterWords,"co"))
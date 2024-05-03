// Completa la función que tomando dos números como argumento devuelva el más alto.
function sum(numberOne , numberTwo) {
    if (numberOne>numberTwo) {
        return numberOne;
    } else if(numberOne<numberTwo) {
        return numberTwo;
    }else{
            return "iguales";
    }
  }

 x= sum(3,3);
 console.log(x)
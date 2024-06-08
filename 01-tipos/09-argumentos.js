//los parametros son los valores que se pasan a la función
function suma(a, b) {
    //arguments es un objeto que tiene todos los argumentos que se pasan a la función
  console.log(arguments); // no es recomendable usarlo
  return a + b;
}

//son argumentos que se pasan a la función
let reultado = suma(5, 6, 1, 2, 3); // 4
console.log(reultado);
console.log(typeof suma);

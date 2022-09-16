// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

const { suma } = require("../../02-JS-II/homework/homework");

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var i=1;
    var suma=0;
    while(i<=10)
    {
      suma = suma+i;
      i++;
    }
    return suma;
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var array1 = new Array();
  for (let i=0; i< array.length;i++){
    var elemento=array[i];
    if(elemento%2==0){
      
      array1.push(elemento);
    }
  }
  return array1;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  var array1 = new Array();
  for(let i=0; i < array.length; i++){
    var elemento=array[i];
    array1.push(elemento**2);
  }
  return array1;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  var suma=0;
  for (let i=0;i<array.length;i++){
    var elemento=array[i];
    suma=suma+elemento;
  }
  return suma;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  var length = ~~(Math.log(num) / Math.LN10 + 1);

  return length;
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };

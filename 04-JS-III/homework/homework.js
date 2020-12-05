// No cambies los nombres de las funciones.

const { estaEnRango } = require("../../03-JS-II/homework/homework");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  //array = [10,10,12,16];
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array.pop();
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for( i = 0; i < array.length; i++)
  {
    array[i] = array[i] + 1;
  }
  return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var concat = '';
  for(i = 0; i < palabras.length; i++)
  {  
    if(concat === '')
    {
      concat = palabras[i] ;
    }  
    else
    {
      concat = concat + ' ' + palabras[i] ;
    }    
  }
  return concat;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var e = false; 
  for(i=0; i< array.length; i++)
  {
    if(array[i] === elemento)
    {
      e = true;
    }    
  }
  return e;
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for(i=0; i<numeros.length; i++)
  {
    suma = suma + numeros[i];
  }
  return suma;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var acum = 0;
  var cont = 0;
  var prom = 0;
  for(i=0; i<resultadosTest.length; i++)
  {
    acum = acum + resultadosTest[i];
    cont++;
  }
  prom = acum / cont;
  return prom;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var masGrande = 0;
  for(i=0; i<numeros.length; i++)
  {
    if( i === 0)
    {
      masGrande = numeros[i];
    }
    else if (numeros[i] > masGrande)
    {
      masGrande = numeros[i];
    }
  }
  return masGrande;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  var tot = 1;
  if(arguments.length < 1) 
  {
    return 0;
  }
  for(i=0; i<arguments.length; i++)
  {
    tot = tot * arguments[i];
  }
  return tot;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};

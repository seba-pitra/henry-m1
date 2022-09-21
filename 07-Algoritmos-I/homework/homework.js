'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let i = 2;
  let array = [1]
  while(num > 1) {
    console.log(num, "%", i);
    if(num % i === 0) {
      array.push(i)
      num = num/i
    } else i++
  }
  return array 
}

console.log(factorear(180))

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  let swap = true;

  while (swap) {
    swap = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let aux = array[i]
        array[i] = array[i + 1]
        array[i + 1] = aux
        swap = true;
      }
    }
  }
  return array


  // for (let i = 0; i < array.length - 1; i++) {
  //   for (let j = 0; j < array.length - 1; j++) {

  //     if (array[j] > array[j + 1]) {
  //       let aux = array[j]
  //       array[j] = array[j + 1]
  //       array[j + 1] = aux;
  //     }

  //   }   
  // }
  // return array
}

console.log(bubbleSort([5, 1, 4, 2, 8]) )


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let aux = array[i]
    while (j >= 0 && array[j] > aux) {
      array[j + 1] = array[j]
      j--;
    }
    array[j + 1] = aux
  }
  return array
  
  
  
  
  
  // for (let i = 0; i < array.length; i++) {
  //   for (let j = 0; j < array.length - 1; j++) {

  //     if (array[j + 1] < array[j]) {
  //       let aux = array[j]
  //       array[j] = array[j + 1]
  //       array[j + 1] = aux;
  //     }

  //   }   
  // }
  // return array
}

let arr = [1,4,3,7,2,12,6,5,8]
      //  1,3,4,7,2...
      //  1,3,4,2,7
      //  1,3,2,4,7
      //  1,
insertionSort(arr)


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    let min = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j
      }  
    }
    if (min !== i) {
      let aux = array[i]
      array[i] = array[min]
      array[min] = aux
    }
  }
  return array
}

console.log(selectionSort([5, 1, 4, 2, 8]))


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};

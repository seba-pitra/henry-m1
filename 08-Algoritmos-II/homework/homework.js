'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array
  
  const PIVOTE = array[0];
  let mayor = [];
  let menor = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > PIVOTE) {
      mayor.push(array[i])
    } else {
      menor.push(array[i])
    }
  }
  let res = quickSort(menor).concat(PIVOTE).concat(quickSort(mayor))
  return res
}

console.log(quickSort([5, 1, 4, 2, 8]));

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};

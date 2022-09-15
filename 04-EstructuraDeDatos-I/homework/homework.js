'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5  , 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
   //Formula de factorial --> 5 * 4! 
   if(n === 0 || n === 1) return 1
   else if(n < 0) return 0
   return n * nFactorial(n - 1)
}
console.log(nFactorial(5))


function nFibonacci(n) {
   //Formula de fibonacci: fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)
   //caso base: Cuando llegue a 0 o a 1;
   if (n == 0) return 0
   else if(n == 1) return 1
   else return nFibonacci(n-1) + nFibonacci(n-2)
}
console.log(nFibonacci(7))

// nFibonacci(7) = nFibonacci(6) + nFibonacci(5)
// nFibonacci(6) = nFibonacci(5) + nFibonacci(4)
// nFibonacci(5) = nFibonacci(4) + nFibonacci(3)
// nFibonacci(4) = nFibonacci(3) + nFibonacci(2)
// nFibonacci(3) = nFibonacci(2) + nFibonacci(1)
// nFibonacci(2) = nFibonacci(1) + nFibonacci(0)  

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
   this.arr = [];
}

Queue.prototype.enqueue = function(n) {
   this.arr.push(n)
}

Queue.prototype.dequeue = function() {
   if(this.arr === []) return undefined;
   return this.arr.shift()
}


Queue.prototype.size = function() {
   return this.arr.length;
}

const queue = new Queue();
queue.enqueue(23)
queue.enqueue(11)
let s = queue.dequeue()
console.log(s);

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};

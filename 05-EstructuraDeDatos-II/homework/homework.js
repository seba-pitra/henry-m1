"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
   this.head = null;
   this.size = 0;
}

function Node(value) {
   this.value = value;
   this.next = null;
}

LinkedList.prototype.add = function(value) {
   const newNode = new Node(value);
   let current = this.head;
   this.size++

   if (!current) {
      this.head = newNode;
      return newNode;
   } 
   while (current.next) {
      current = current.next
   }
   current.next = newNode
}

LinkedList.prototype.remove = function() {
   let current = this.head;
   
   if(!current) return null
   
   this.size--
   if (!current.next) {
      let value = current.value
      this.head = null
      return value
   }
   else if(!current.next.next) {
      let value = current.next.value
      current.next = null
      return value
   } 
   else {
      while (!current.next.next) {
         current = current.next;
      }
      let value = current.next.next.value;
      current.next.next = null;
      return value
   }
}

LinkedList.prototype.search = function(param) {
   let current = this.head
   if(this.head == null) return null

   if (typeof param == 'function') {
      if(param(this.head.value)) return this.head.value
      else {
         while (current.next) {
            current = current.next
            if(param(current.value)) return current.value
            else if(current.next == null) return null
         }
      }
   } else {
      if (current.value == param) {
         return current.value
      } 
      else {
         while (current.next) {
            current = current.next
            if(current.value === param) return current.value;
            else if(current.next == null) return null
         }
      }
   }
}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
   this.arr = [];
   this.numBuckets = 35;
}

HashTable.prototype.hash = function(input) {
   let acc = 0
   for (const letter of input) {
      acc += letter.charCodeAt()
   }
   return acc % this.numBuckets;
}

HashTable.prototype.set = function(key, value) {
   const index = this.hash(key)
   if (!this.arr[index]) {
      this.arr[index] = {};
   }
   this.arr[index][key] = value
}

HashTable.prototype.get = function(key) {
   const index = this.hash(key)
   const bucket = this.arr[index];
   if (bucket) {
      return bucket[key]
   }
   return null
}

HashTable.prototype.hasKey = function(key) {
   if (this.get(key)) return true
   else return false
}

const hash = new HashTable()

hash.set('foobar', 'fluf cats')
console.log(hash.hasKey('foobar'))
console.log(hash.hasKey('raboof'))

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};

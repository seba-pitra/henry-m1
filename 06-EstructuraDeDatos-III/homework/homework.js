"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - insert: agrega un nodo en el lugar correspondiente
  - size: retorna la cantidad total de nodos del árbol
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El árbol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value
  this.left = null;
  this.right = null;
}

// - insert: agrega un nodo en el lugar correspondiente
BinarySearchTree.prototype.insert = function(value) {
   if (value < this.value) {
      if (this.left) {
         this.left.insert(value)
      } else {
         this.left = new BinarySearchTree(value)
      }
   }
   if (value > this.value) {
      if (this.right) {
         this.right.insert(value)
      } else {
         this.right = new BinarySearchTree(value)
      }
   }
   return false
}

// - size: retorna la cantidad total de nodos del árbol
BinarySearchTree.prototype.size = function() {
   let acc = 1;
   if (this.left) {
      acc += this.left.size()
   }
   if (this.right) {
      acc += this.right.size()
   }
   return acc
}

BinarySearchTree.prototype.contains = function() {}

BinarySearchTree.prototype.depthFirstForEach = function() {}

BinarySearchTree.prototype.breadthFirstForEach = function() {}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};

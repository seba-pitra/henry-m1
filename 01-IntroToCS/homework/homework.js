'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
   let res = 0; //res va a ir acumulando los resultados hasta llegar al resultado final
   let number = num.split("").reverse() //Como los indices se leen de  derecha a izquierda hago un reverse
   for (let i = 0; i < number.length; i++) {
     res += number[i] * 2 ** i //formula para binario a decimal
   }
   return res
}

function DecimalABinario(num) {
   // tu codigo aca
   let binario = []; //aca voy a ir poniendo los binarios uno x uno
   
   while (num !== 0) { //mientras que las divisiones por dos no me modifiquen el num hasta llegar al 0, sigo
      binario.unshift(num % 2)
      num = Math.floor(num / 2)
   }
   return binario.join("")
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
}
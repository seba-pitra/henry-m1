var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;//el this hace referencia al obj "prop"
      }
   }
};

console.log(obj.prop.getFullname());//aurelio da rosa

var test = obj.prop;

console.log(test);
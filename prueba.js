// Escribir un programa que genere una lista al azar de entre 4 y 10 elementos. Cada elemento del array
//deberá ser otro array con tres números naturales entre 0 y 10 también al azar. *(1,5 ptos)*

var numerosalazar = [Math.floor(Math.random() * 6) + 4];
function generarArrayBidimensional() {
  function generarArray() {
    return [numerosalazar, numerosalazar, numerosalazar];
  }
  var array = [];
  for (var i = 0; i < 10; i++) {
    array.push(generarArray());
  }
}



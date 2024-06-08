/*
 *crear algoritmo que devuelva
 *el precio del producto
 *mas impuestos
 */

function precioCompletp(precio, impuestos) {
  // imp = precio % impuestos;
  return precio + precio * impuestos;
}

let resultado = precioCompletp(19.9, 0.15);
console.log(resultado);

// let mayor = cualEsmayor(10, 5);
// function cualEsmayor(a, b) {
//   if (a > b) {
//     let mayor = a;
//     console.log(mayor); // 10
//   } else {
//     let mayor = b;
//     console.log(mayor); // 10
//   }
// }

function cualEsmayor(a, b) {
  return a > b ? a : b;
}
let mayor = cualEsmayor(10, 5);
console.log(mayor); // 10

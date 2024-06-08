function Punto(x, y) {
  this.x = x;
  this.y = y;
  this.dibujar = function () {
    console.log("dibujar");
  };
}

///no utulizar
// const Point = new Function(
//   "x",
//   "y",
//   "this.x = x; this.y = y; this.dibujar = function(){console.log('Dibujo')};"
// );
// const p = new Point(1, 2);
// console.log(p);
let punto = { z: 3 };
// Punto.call(punto, 1, 2);
Punto.apply(punto, [1, 2]);
console.log(punto);

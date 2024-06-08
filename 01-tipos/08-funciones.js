//function sirve para declarar una función
//que nos permite reutilizar código
function saludar() {
  console.log("Hola mundo");
}

saludar(); // Hola mundo
// --------------------1------------------------
function sumar() {
  return 2 + 2;
}
let resultado = sumar();
console.log(resultado); // 4

// -------------------2-------------------------
function suma(a, b) {
  return a + b;
}
console.log(suma()); // 5

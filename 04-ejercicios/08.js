// crear algoritmo que tome un array de
//obajeto y deveulva un array de pares

let array = [
  {
    id: 1,
    name: "juan",
  },

  {
    id: 2,
    name: "pedro",
  },

  {
    id: 3,
    name: "lucas",
  },

  {},
];
let pares = [
  [1, { id: 1, name: "juan" }],
  [2, { id: 2, name: "pedro" }],
  [3, { id: 3, name: "lucas" }],
];

function toPairs(arr) {
  let pairs = [];

  for (idx in arr) {
    let elemento = arr[idx];
    (pairs[idx] = [elemento.id]), elemento;
  }
  return pairs;
}

let resultado = toPairs(array);
console.log(resultado);

//short-ciurcuit

//todos estos son valores falsy
//falso
//false
//0
//""
//null
//undefined
//NaN
let nombre = "cahncito feliz";
let username = nombre || "sin nombre";
console.log(username);

function fn1() {
  console.log(" soy  funcion 1 ");
  return true;
}

function fn2() {
  console.log(" soy funcion 2");
  return true;
}

let usuario = fn1() && fn2();

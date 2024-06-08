function Usuario(nombre) {
  this.nombre = nombre;
}
console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario;
let user = new U("Nico");
console.log(user);

function of(Fn, arg) {
  return new Fn(arg);
}

let user2 = of(Usuario, "Nico");
console.log(user2);

function returned() {
  return function () {
    console.log("Soy una funcion");
  };
}

let saludo = returned();
saludo();

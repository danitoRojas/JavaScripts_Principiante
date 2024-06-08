//las funciones constructoras deven de empezar con mayuscula usar upper camel case o pascal case
function Usuario() {
  //this hace referencia al objeto que se esta creando
  this.id = 1;
  this.nombre = "Juan";
  this.recuperarClave = function () {
    console.log("Recuperando clave...");
  };
}
let usuario = new Usuario();
console.log(usuario);

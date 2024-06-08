// personaje de TV

let nombre = "Juan";
let anime = "Naruto";
let edad = 25;

//{} es un objeto vacio literal
let personaje = {
  //llave: valor
  nombre: "Juan",
  anime: "Naruto",
  edad: 25,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["nombre"]);
//
personaje.edad = 13; //recomendado
personaje["edad"] = 15;
//

let llave = "edad";
personaje[llave] = 20;
//delete elimina una propiedad de un objeto
delete personaje.anime;
console.log(personaje);

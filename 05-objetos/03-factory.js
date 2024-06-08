// Objetos Factory

function createUser(email, name) {
  return {
    email,
    name,
    activo: true,
    recuperarClave: function () {
      console.log("Recuperando clave...");
    },
  };
}

let user1 = createUser("Nico", "Nico@gmaik.com");
let user2 = createUser("daniel", "@gmail.com");
console.log(user1, user2);

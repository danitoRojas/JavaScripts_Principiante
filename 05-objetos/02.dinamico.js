const user = { id: 1 };
user.name = "Nicolás";
user.guardar = function () {
  console.log("Guardando...", user.name);
};

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

// para no cambiar el onjeto

const user1 = Object.freeze({ id: 1 });
user1.name = "Nicolás";
console.log(user1);

// para no cambiar el onjeto y sus propiedades
const user2 = Object.seal({ id: 1 });
user2.name = "Nicolás";
user2.id = 2;
console.log(user2);

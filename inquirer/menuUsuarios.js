const inquirer = require("inquirer");
const {crearUsuarios, modificarUsuarios, borrarUsuarios,} = require("../controllers/registroUsuarios");
const { pausa, crearMenu } = require("../helpers/inquirer");
const { headerRegistroUsuarios } = require("../helpers/heders");

const menuUsuario = async () => { 
  
 const menuOpciones = [
  ["Crear usuario nuevo", crearUsuarios],
  ["Modificar un usuario nuevo", modificarUsuarios],
  ["Borrar un usuario", borrarUsuarios]
  ]

  await crearMenu( menuOpciones, ['cyan'], headerRegistroUsuarios );
}

module.exports = {
 menuUsuario,
};

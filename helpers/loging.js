const Usuario = require("../models/usuarios");
const { headerLoging } = require("./heders");
const { input, pausa } = require("../inquirer/inquirer");

const loging = async (color) => {
    headerLoging(color);
    const email = await input("Ingrse su correo\n");
    headerLoging(color);
    const password = await input("Ingrese su contraseña\n", "password");
    const data = await Usuario.findOne( { email , estado: true} ).lean();
    if (data) {
      if (data.password !== password) {
        headerLoging(color);
        console.log("Verifique sus datos!!!!");
        await pausa();
        return false;
      } else {
        return data._id;
      }
    } else {
      headerLoging(color);
      console.log("Verifique sus datos!!!!");
      await pausa();
    }
  };

  module.exports = loging;
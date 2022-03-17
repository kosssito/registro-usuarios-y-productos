const Usuario = require("../models/usuarios");
const { pausa, input } = require("../helpers/inquirer");
const { validarEmail } = require("../helpers/validar-email");
const { headerRegistroUsuarios, headerLoging } = require("../helpers/heders");
const { dataBaseFind } = require("../helpers/busquedas");

const crear = async () => {
  headerRegistroUsuarios();
  const nombre = await input("Ingrese el nombre del usuario\n", "input");
  if ((await dataBaseFind(Usuario,"nombre", nombre, true, true)) == false) {
    headerRegistroUsuarios();
    const email = await input("Ingrese su Email\n", "input");
    if ((await dataBaseFind(Usuario,"email", email, true, true)) == false) {
      if (validarEmail(email) == false) {
        headerRegistroUsuarios();
        console.log("Ingrese un correo valido");
      } else {
        let password;
        let confirmar;
        do {
          headerRegistroUsuarios();
          password = await input("Ingrese su constaseña\n", "password");
          headerRegistroUsuarios();
          confirmar = await input("Confirme su constaseña\n", "password");
          if (password !== confirmar) {
            console.log("No coinciden las contraseñas");
            await pausa();
          }
        } while (password !== confirmar);
        let numero;
        do {
          headerRegistroUsuarios();
          numero = await input("Ingrese su numero telefonico\n", "number");
          if (Number.isNaN(numero)) {
            headerRegistroUsuarios();
            console.log("Ingrese un numero de telefono valido");  
            await pausa();
          }else if(numero.toString().length !==10){
            headerRegistroUsuarios();
            console.log('Ingrese un numero con 10 digitos');
            await pausa();
          }

        } while (Number.isNaN(numero)||numero.toString().length !==10);
        
        if ((await dataBaseFind(Usuario,"numero", numero, true, true)) == false) {
          headerRegistroUsuarios();
          const data = {
            nombre: nombre,
            email: email,
            password: password,
            numero: numero,
          };
          console.table(data);
          const confirmar = await input(
            "¿La Informacion es Correta?\n",
            "confirm"
          );
          if (confirmar) {
            return data;
          }
        }
      }
    }
  }
};

const crearUsuarios = async () => {
  const usuario = await crear();
  if (usuario !== undefined) {
    headerRegistroUsuarios();
    try {
      await Usuario.create(usuario);
      console.log(`${"Usuario".cyan} ${usuario.nombre} ${"creado!!!".cyan}`);
    } catch (error) {
      headerRegistroUsuarios();
      console.log(error);
    }
  }
  await pausa();
};

const modificarUsuarios = async () => {
  headerRegistroUsuarios();
  const correo = await input(
    "Ingrse el correo del usuario a modificar\n",
    "input"
  );
  const rData = await dataBaseFind(Usuario,"email", correo);
  if (rData.length == 0) {
    headerRegistroUsuarios();
    console.log("No exite ese correo en base de datos");
  } else {
    headerRegistroUsuarios();
    const password = await input(
      "Ingrese la contraseña del usuario a modificar\n",
      "password"
    );
    if (rData[0].password !== password) {
      headerRegistroUsuarios();
      console.log("La contraseña es incorrecta");
    } else {
      const usuario = await crear();
      headerRegistroUsuarios();
      await Usuario.findByIdAndUpdate(rData[0]._id.toString(), usuario);
      console.log(
        `${"Usuario".cyan} ${rData[0].nombre} ${"Modificado!!!".cyan}`
      );
    }
  }
  await pausa();
};
const borrarUsuarios = async () => {
  headerRegistroUsuarios();
  const correo = await input(
    "Ingrse el correo del usuario a borrar\n",
    "input"
  );
  const rData = await dataBaseFind(Usuario,"email", correo);
  if (rData.length == 0) {
    headerRegistroUsuarios();
    console.log("No exite ese correo en base de datos");
  } else {
    headerRegistroUsuarios();
    const password = await input(
      "Ingrese la contraseña del usuario a borrar\n",
      "password"
    );
    if (rData[0].password !== password) {
      headerRegistroUsuarios();
      console.log("La contraseña es incorrecta");
    } else {
      headerRegistroUsuarios();
      await Usuario.findByIdAndDelete(rData[0]._id.toString());
      console.log(`${"Usuario".cyan} ${rData[0].nombre} ${"Borrado!!!".cyan}`);
    }
  }
  await pausa();
};

const loging = async (color) => {
  headerLoging(color);
  const correo = await input("Ingrse su correo\n", "input");
  const rData = await dataBaseFind(Usuario,"email", correo);
  if (rData.length == 0) {
    headerLoging(color);
    console.log("No exite ese correo en base de datos");
  } else {
    headerLoging(color);
    const password = await input("Ingrese su contraseña\n", "password");
    if (rData[0].password !== password) {
      headerLoging(color);
      console.log("La contraseña es incorrecta");
      return false;
    } else {
      return rData;
    }
  }
};

module.exports = {
  crearUsuarios,
  modificarUsuarios,
  borrarUsuarios,
  loging,
};

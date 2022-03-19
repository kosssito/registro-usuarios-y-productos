require('dotenv').config()
const { connectDB, desconectar } = require('./dataBase/config');
const {pausa} = require('./helpers/inquirer');
const { mainMenu } = require('./inquirer/menus');

console.clear();

const main = async()=>{
  
    //Se conecta a la base de datos
    await connectDB();
     // Mensaje precionar enter para continuar
     await pausa();
     // ejecunta el menu principal
     await mainMenu();
     //desconeccion de la base de datos
     await desconectar();
     console.clear();
}
main();
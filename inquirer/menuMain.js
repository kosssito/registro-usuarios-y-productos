const { headersMainMenu } = require('../helpers/heders');
const { crearMenu } = require('../helpers/inquirer');
const { menuBusquedas } = require('./menuBusquedas');
const { menuInventario } = require('./menuInventario');
const { menuUsuario } = require('./menuUsuarios');


const mainMenu = async()=>{

    const menuOpciones = [
    ['Registro de Usuarios', menuUsuario],
    ['Buscar usuarios Base de datos', menuBusquedas],
    ['Inventario', menuInventario]
    ]

  await crearMenu( menuOpciones, ['magenta'], headersMainMenu );

}

module.exports = {
    mainMenu
    
}
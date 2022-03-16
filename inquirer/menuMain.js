const inquirer = require('inquirer');
const { headersMainMenu } = require('../helpers/menus');
const { menuBusquedas } = require('./menuBusquedas');
const { menuInventario } = require('./menuInventario');
const { menuUsuario } = require('./menuUsuarios');
require('colors');

const menuOpciones = [
    ['Registro de Usuarios', menuUsuario],
    ['Buscar usuarios Base de datos', menuBusquedas],
    ['Inventario', menuInventario]
    ]

const mainMenu = async()=>{

    const crearOpciones = menuOpciones.map((element, index)=>{
        idx = index+1
        
        return {
            value: element[1],
            name: `${`${idx}.`.magenta} ${element[0]}`
        }
    })

    const salir = ()=>{ return 'me salgo'}
    crearOpciones.push({
        value: salir,
        name: `${'0.'.magenta} Salir`
        
    })

    const crearMenu = async()=>{
        headersMainMenu();
        const {opcion} = await inquirer.prompt([
            {
                type: 'list',
                name: 'opcion',
                message: 'Seleccione Una Opcion'.magenta,
                choices: crearOpciones
            }
        ]);
        
        return opcion;
    }

    do {
        opt = await crearMenu();
        await opt();
    } while (opt !== salir);

}

module.exports = {
    mainMenu
    
}
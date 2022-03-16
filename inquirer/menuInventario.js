require('colors');
const inquirer = require('inquirer');
const { pausa } = require('../helpers/inquirer');
const { headerInventario } = require('../helpers/menus');

const menu = async ()=>{
    
    headerInventario();

   const {opcion} = await inquirer.prompt([{
    type: 'list',
    name: 'opcion',
    message: 'Seleccione una opcion'.gray,
        choices: [
            {
                value: 1,
                name: `${'1.'.gray} Registrar Productos`
            },
            {
                value: 2,
                name: `${'2.'.gray} Mostrar Inventario`
            },
            {
                value: 0,
                name: `${'0.'.gray} Salir`
            }
        ]
    }])
    return opcion;
}

let opt
const menuInventario = async()=>{
    do {
        opt = await menu();

        switch (opt) {
            case 1:
                headerInventario();
                console.log(' registrando productos!!!');
                await pausa();
            break;
            case 2:
                headerInventario();
                console.log(' Mostrando Inventario!!!');
                await pausa();
            break;
        }
        
    } while (opt != 0);

}

module.exports = {
    menuInventario
}
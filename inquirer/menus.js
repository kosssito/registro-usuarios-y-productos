const { headersMainMenu, headerRegistroUsuarios, headerBusquedasUsuarios, headerInventario } = require('../helpers/heders');
const { crearMenu } = require('../helpers/inquirer');
const {crearUsuarios, modificarUsuarios, borrarUsuarios,} = require("../controllers/registroUsuarios");
const { findName, findEmail, findNumero, findAll } = require('../controllers/busquedas');
const { mostrarInventario, registrarProductos, crearCategoria } = require('../controllers/productos');

const mainMenu = async()=>{

    const menuOpciones = [
    ['Registro de Usuarios', menuUsuario],
    ['Buscar usuarios Base de datos', menuBusquedas],
    ['Inventario', menuInventario]
    ]

  await crearMenu( menuOpciones, ['magenta'], headersMainMenu );

}

const menuUsuario = async () => { 
  
  const menuOpciones = [
   ["Crear usuario nuevo", crearUsuarios],
   ["Modificar un usuario nuevo", modificarUsuarios],
   ["Borrar un usuario", borrarUsuarios]
   ]
 
   await crearMenu( menuOpciones, ['cyan'], headerRegistroUsuarios );
 }

 const menuBusquedas = async()=>{

  const menuOpciones = [
      ['Buscar por nombre', findName ],
      ['Buscar por email', findEmail],
      ['Buscar por numero', findNumero],
      ['Mostrar usuarios registrados', findAll]
      ]

  await crearMenu(menuOpciones, ['yellow'],headerBusquedasUsuarios);
}

const menuInventario = async()=>{

  const menuOpciones = [
  ['Crear Catrgoria', crearCategoria],
  ['Registrar Productos', registrarProductos],
  ['Mostrar Inventario', mostrarInventario]
  ]

await crearMenu( menuOpciones, ['gray'], headerInventario );

}

module.exports = {
    mainMenu
    
}
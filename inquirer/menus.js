const { headersMainMenu, headerRegistroUsuarios, headerBusquedasUsuarios, headerInventario } = require('../helpers/heders');
const { crearMenu } = require('./inquirer');
const {crearUsuarios, modificarUsuarios, borrarUsuarios} = require("../controllers/registroUsuarios");
const { findName, findEmail, findNumero, findAll } = require('../controllers/busquedas');
const { mostrarInventario, registrarProducto, crearCategoria, borrarCategoria, modificarProducto, borrarProducto } = require('../controllers/productos');
const loging = require('../helpers/loging');
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
  ['Borrar Catrgoria', borrarCategoria],
  ['Registrar Producto', registrarProducto],
  ['Modificar Producto', modificarProducto],
  ['Borrar Producto', borrarProducto],
  ['Mostrar Inventario', mostrarInventario]
  ]
   dataLoging = await loging(['gray']);
   if(dataLoging){
     await crearMenu( menuOpciones, ['gray'], headerInventario, dataLoging );
   }
}

module.exports = {
    mainMenu
    
}
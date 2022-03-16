const inquirer = require("inquirer");
const {crearUsuarios, modificarUsuarios, borrarUsuarios,} = require("../controllers/registroUsuarios");
const { pausa } = require("../helpers/inquirer");
const { headerRegistroUsuarios } = require("../helpers/menus");

async function crearMenu(message, choices) {

  const choicesIndexAdd = choices.map((elemnt, index)=>{
    idx = index+1;
    return {
      value: elemnt[1],
      name: `${`${idx}.`.cyan} ${elemnt[0]}`
    }
  })
  const salir = ()=>{
    return 'me salgo'
  }
  choicesIndexAdd.push({
    value: salir,
    name: `${"0.".cyan} Salir`,
  })

    const menu = async ()=>{
      headerRegistroUsuarios();
       const { opcion } = await inquirer.prompt([
           {
             type: "list",
             name: "opcion",
             message,
             choices: choicesIndexAdd
           }
         ]);
         return opcion;
   }
 
  do {
    opt = await menu();
    await opt();
    await pausa();
  } while (opt !== salir);    

      // do {
      //  opt = await menu();
      //   switch (opt) {
      //     case 1:
      //       // seccion para crear usuarios
      //       await choices[0][1]();
    
      //       break;
      //     case 2:
      //       // seccion para modificar usuarios
      //       await choices[1][1]();
    
      //       break;
      //     case 3:
      //       await choices[2][1]();
      //       break;
      //   }
      //   await pausa();
      // } while (opt != 0);


}

const menuUsuario = async () => { 
  
  await crearMenu("Seleccione una opcion".cyan, 
[
  ["Crear usuario nuevo", crearUsuarios],
  ["Modificar un usuario nuevo", modificarUsuarios],
  ["Borrar un usuario", borrarUsuarios]
 
]
);}


module.exports = {
 menuUsuario,
};

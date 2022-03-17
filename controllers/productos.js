const { headerInventario } = require("../helpers/heders");
const { pausa, input } = require("../helpers/inquirer");
const {loging} = require("../controllers/registroUsuarios");
const { dataBaseFind } = require("../helpers/busquedas");
const Categoria = require("../models/categorias");

const crearCategoria = async()=>{
    const dataLoging = await loging(['gray']);
    if(dataLoging){
        headerInventario();
       const categoria = await input('Ingrese el nombre de la categoria a crear\n', 'input');
      if( !await dataBaseFind(Categoria, 'nombre', categoria, true, true)){

        Categoria.create({
            nombre: categoria.toUpperCase(),
            usuario: dataLoging[0]._id
         })

          console.log(`Categoria: ${categoria.toUpperCase()} creada!!!`);
      }
        
        
    }
    
    await pausa();

  }

  const registrarProductos = async()=>{
    console.log('creando producto!!');
    await pausa();
  }
  const mostrarInventario = async()=>{
    console.log('mostrando inventario!!');
    await pausa();
  }

module.exports = {
    crearCategoria,
    registrarProductos,
    mostrarInventario
}
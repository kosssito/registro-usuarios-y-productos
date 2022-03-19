const { headerInventario } = require("../helpers/heders");
const { pausa, input, crearMenu } = require("../helpers/inquirer");
const {loging} = require("../controllers/registroUsuarios");
const { dataBaseFind } = require("../helpers/busquedas");
const Categoria = require("../models/categorias");
const Producto = require("../models/productos");

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
    const dataLoging = await loging(['gray']);
    if(dataLoging){
      headerInventario();
      const nombreProducto = await input('Ingrese el nombre del producto\n', 'input');
      if( !await dataBaseFind(Producto, 'nombre', nombreProducto, true, true)){
        headerInventario();
         descripcion = await input('Ingrese una descripcion del producto\n', 'input');
      }
      const data = await dataBaseFind(Categoria, 'allFind')
     
      const data2 = (Object.entries(data)).map( e =>{
        return [  e[1].nombre, e[1]._id ]
      })
      const data3 = await crearMenu(data2, ['blue'], headerInventario, true )
      if(data3){
        headerInventario();
        dataProducto = {
          nombre: nombreProducto,
          usuarios: dataLoging[0]._id,
          categoria: data3,
          descripcion
        }
         console.log(dataProducto)
        confirmar = input('¿La infomacion es correcta?\n', 'confirm')
        if (confirmar){
         await Producto.create(dataProducto);
        }
      }
    }


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
const { headerInventario } = require("../helpers/heders");
const { pausa, input, crearMenu } = require("../inquirer/inquirer");;
const Categoria = require("../models/categorias");
const Producto = require("../models/productos");
const Usuario = require("../models/usuarios");

const crearCategoria = async(logingID)=>{
        headerInventario();
       const categoria = await input('Ingrese el nombre de la categoria a crear\n');
      if( await Categoria.findOne({ nombre: categoria }) ){
        console.log('Ya existe esa categoria!!!')
      }else{
        const c = new Categoria({
          nombre: categoria,
          usuario: logingID
       })
       c.save();
          console.log(`Categoria: ${categoria.toUpperCase()} creada!!!`);
      }
    await pausa();
  }

  const borrarCategoria = async()=>{
    headerInventario();
    const buscarCategorias = await Categoria.find().lean()
    const arryCategorias = (Object.entries(buscarCategorias)).map( e =>{
      return [  e[1].nombre, e[1]._id ]
    })
    const categoriaSeleccionada = await crearMenu(arryCategorias, ['blue'], headerInventario )
    await Categoria.findByIdAndUpdate(categoriaSeleccionada, {estado: false} )
    console.log('Categoria borrada!!!!')
    await pausa();
  }

  const registrarProducto = async(logingID)=>{
      headerInventario();
      const nombreProducto = await input('Ingrese el nombre del producto\n');
      if( await Producto.findOne( {nombre: nombreProducto} )){
        console.log('Ya existe un producto con ese nombre');
      }else{
        headerInventario();
        descripcion = await input('Ingrese una descripcion del producto\n');
        const buscarCategorias = await Categoria.find({estado: true}).lean()
        const arryCategorias = (Object.entries(buscarCategorias)).map( e =>{
          return [  e[1].nombre, e[1]._id ]
        })
        const categoriaSeleccionada = await crearMenu(arryCategorias, ['gray'], headerInventario )
        if(categoriaSeleccionada){
          headerInventario();
          const cantidad = await input( 'Ingrese la catidad de productos a registrar\n', 'number')
          headerInventario();
          const usuario = await Usuario.findById(logingID)
          const categoria = await Categoria.findById(categoriaSeleccionada)
          dataProducto = {
            nombre: nombreProducto,
            usuario: logingID,
            categoria: categoriaSeleccionada,
            descripcion,
            cantidad
          }
           console.table({
            nombre: nombreProducto,
            usuario: usuario.nombre,
            categoria: categoria.nombre,
            descripcion,
            cantidad
          })
          confirmar = await input('¿La infomacion es correcta?\n', 'confirm')
          if (confirmar){
            headerInventario();
           await Producto.create(dataProducto);
           console.log( `Producto ${nombreProducto.toUpperCase()} creado !!!!`)
          }
        }
      }
    await pausa();
  }

  const modificarProducto = async(logingID)=>{
    
    const capturarNombre = async(productoID)=>{
        headerInventario();
        const nombreNuevo = await input('Ingrese el nuevo nombre del producto\n');
        if( await Producto.findOne( {nombre: nombreNuevo} ) ){
          console.log('Ya existe un producto con ese nombre');
        }else{
          await Producto.findByIdAndUpdate(productoID, {nombre: nombreNuevo, usuario: logingID})
          console.log('Nombre de producto actulizado!!!');
        }
      
      await pausa();
    }
    const capturarCategoria = async(productoID)=>{
      const buscarCategorias = await Categoria.find({estado: true}).lean()
      const arryCategorias = (Object.entries(buscarCategorias)).map( e =>{
        return [  e[1].nombre, e[1]._id ]
      })
      const categoriaSeleccionada = await crearMenu(arryCategorias, ['gray'], headerInventario )
      await Producto.findByIdAndUpdate(productoID, {categoria: categoriaSeleccionada, usuario: logingID})
      console.log('Categoria del producto actualizada');
      await pausa();
    }

    const capturarDescripcion = async(productoID)=>{
      headerInventario();
        descripcion = await input('Ingrese una descripcion del producto\n');
        await Producto.findByIdAndUpdate(productoID, {descripcion, usuario: logingID})
        headerInventario();
      console.log('Descripcion del producto actualizada');
      await pausa();
    }

    const capturarCantidad = async(productoID)=>{
      headerInventario();
      cantidad = await input('Ingrese la cantidad del producto\n', 'number');
      await Producto.findByIdAndUpdate(productoID, {cantidad, usuario: logingID})
      headerInventario();
      console.log('Cantidad del producto actualizada');
      await pausa();
    }

    menuOpciones=[
      ['Modificar nombre',capturarNombre],
      ['Modificar categoria',capturarCategoria],
      ['Modificar descripcion',capturarDescripcion],
      ['Modificar cantidad',capturarCantidad],
    ]

    headerInventario();
      const nombreProducto = await input('Ingrese el nombre del producto a modificar\n');
      const producto = await Producto.findOne( {nombre: nombreProducto, estado: true} ).lean();
      if(producto){
    await crearMenu(menuOpciones,['gray'],headerInventario, producto._id )
  }else{
    console.log('No existe el producto en base de datos');
    await pausa();
  }
  }

  const borrarProducto = async()=>{
    headerInventario();
      const nombreProducto = await input('Ingrese el nombre del producto a borrar\n');
      const producto = await Producto.findOne( {nombre: nombreProducto, estado: true} ).lean()
      if(producto ){
        await Producto.findByIdAndUpdate(producto._id, {estado: false})
        console.log(`Producto: ${producto.nombre} borrado!!! ` );
      }else{
        console.log('No existe un producto con ese nombre');
      }
      await pausa();
  }

  const mostrarInventario = async()=>{
    data = await Producto.find({estado: true}).populate('usuario', 'nombre').populate( 'categoria', 'nombre').lean();
    const tabular = data.map(e=>{
      return {
        producto: e.nombre,
        categoria: e.categoria.nombre,
        descripcion: e.descripcion,
        usuario: e.usuario.nombre,
        cantidad: e.cantidad
      }

    })

    headerInventario();
    console.table(tabular);
    await pausa();
  }

module.exports = {
    crearCategoria,
    registrarProducto,
    mostrarInventario,
    borrarCategoria,
    modificarProducto,
    borrarProducto
}
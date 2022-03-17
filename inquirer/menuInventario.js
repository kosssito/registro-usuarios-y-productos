const { pausa, crearMenu } = require('../helpers/inquirer');
const { headerInventario } = require('../helpers/heders');

const menuInventario = async()=>{

    const menuOpciones = [
    ['Registrar Productos', test],
    ['Mostrar Inventario', test]
    ]

  await crearMenu( menuOpciones, ['gray'], headerInventario );

}

const test = async()=>{
    console.log('prueba!!');
    await pausa();
}

module.exports = {
    menuInventario
}
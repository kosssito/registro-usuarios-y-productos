require('colors');
const inquirer = require('inquirer');
const Usuario = require('../models/usuarios');
const { pausa, input, dataBaseFind } = require('../helpers/inquirer');
const { loging } = require('../controllers/registroUsuarios');
const { headerBusquedasUsuarios } = require('../helpers/menus');

let opt
const menuBusquedasGenerico = async (opciones)=>{

const choices = opciones.map((element, index)=>{
    const idx = index + 1;

    return {
        value: element[1],
        name: `${`${idx}.`.yellow} ${element[0]}`
    }
})

choices.push({
    value: false,
    name: `${'0.'.yellow} Salir` 
})

const menu = async ()=>{
    headerBusquedasUsuarios();
      const {opcionB} = await inquirer.prompt([{
        type: 'list',
        name: 'opcionB',
        message: 'Seleccione una opcion'.yellow,
        choices 
    }
])
    return opcionB;
}

const find = async(parametro)=>{
    if(parametro == 'allUsers'){
        if(await loging() == true){
        const data = await dataBaseFind(Usuario,'allUsers');
        const data2 = await dataTabuladaG(data);
        headerBusquedasUsuarios();
        console.table(data2)
        }
        await pausa();
    }else{
     headerBusquedasUsuarios();
     const entrada = await input(`Ingrese el ${parametro} del usuario a buscar\n`, 'input');
     const data = await dataBaseFind(Usuario, parametro ,entrada );
    console.table(dataTabulada(data)); 
    await pausa();   
    }
    
}

const dataTabulada = (data)=>{
    if(data.length === 0){
        return ('No exite en base de datos');
        
    }else{
        return {
            nombre: data[0].nombre,
            email: data[0].email,
            numero: data[0].numero
        }  
    }
}

const dataTabuladaG = async(data)=>{
   return data.map(e => ({
        nombre: e.nombre,
        email: e.email,
        numero: e.numero
    }));
}  
    do {
        opt = await menu();
        if(opt ){
            await find(opt);
        }
    } while (opt);
}

const menuOpciones = [
    ['Buscar por nombre', 'nombre'],
    ['Buscar por email', 'email'],
    ['Buscar por numero', 'numero'],
    [ 'Mostrar usuarios registrados', 'allUsers']
]

const menuBusquedas = async ()=>{
await menuBusquedasGenerico(menuOpciones)
}



module.exports = {
    menuBusquedas
}
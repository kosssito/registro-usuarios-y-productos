const color = require('colors');
const headerRegistroUsuarios = ()=>{
    
    console.clear();     
    console.log('╔══════════════════════╗'.cyan);
    console.log('  REGISTRO DE USUARIOS'.cyan);
    console.log('╚══════════════════════╝'.cyan);
}

const headerBusquedasUsuarios = ()=>{
    
    console.clear();     
    console.log('╔══════════════════════╗'.yellow);
    console.log('  BUSQUEDA DE USUARIOS'.yellow);
    console.log('╚══════════════════════╝'.yellow);
}

const headerLoging = (logingColor = ['yellow'])=>{
    color.setTheme({
        logingColor
    })
    console.clear();     
    console.log('╔══════════════════════╗'.logingColor);
    console.log('       LOGING'.logingColor);
    console.log('╚══════════════════════╝'.logingColor);
}

const headerInventario = ()=>{
    
    console.clear();     
    console.log('╔══════════════════════╗'.gray);
    console.log('       INVENTARIO'.gray);
    console.log('╚══════════════════════╝'.gray);
}
const headersMainMenu = ()=>{

    console.clear();     
    console.log('╔═════════════════════╗'.magenta);
    console.log('    MENU PRINCIPAL'.magenta);
    console.log('╚═════════════════════╝'.magenta);
}

const headerNombre = ()=>{

    console.clear();     
    console.log('╔═════════════════════╗'.magenta);
    console.log('INGRESE EL NOMBRE DEL USUARIO'.magenta);
    console.log('╚═════════════════════╝'.magenta);
}

module.exports = {
    headerRegistroUsuarios,
    headerBusquedasUsuarios,
    headerLoging,
    headerInventario,
    headersMainMenu,
    headerNombre
}
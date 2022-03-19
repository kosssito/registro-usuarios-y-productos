const inquirer = require('inquirer');
const color = require('colors');

const pausa = async() => {

    console.log('\n');
    await inquirer.prompt([
        {
            type: 'input',
            name: 'ePausa',
            message: `Presione ${'ENTER'.cyan} para continuar`
        }
    ] );
}

const input = async(message ,type = 'input')=>{
    const {inputName} = await inquirer.prompt([
        {
            type,
            name: 'inputName',
            message,
            mask: '*'
            
        }
    ]);
    return inputName;
    
}

const crearMenu = async(arrOption, custom, heders, r = false)=>{
    let opt
    color.setTheme({
        custom
    });
const crearOpciones = arrOption.map((element, index)=>{
        idx = index+1
        
        return {
            value: element[1],
            name: `${`${idx}.`.custom} ${element[0]}`
        }
    })

    crearOpciones.push({
        value: false,
        name: `${'0.'.custom} Salir`
        
    })

    const menu = async()=>{
        heders();
        const {opcion} = await inquirer.prompt([
            {
                type: 'list',
                name: 'opcion',
                message: 'Seleccione Una Opcion'.custom,
                choices: crearOpciones
            }
        ]);
        
        return opcion;
    }
    if(r){
        opt =  await menu();
        return opt;
    }else{
        do {
        
        color.setTheme({
        custom
       });
        opt = await menu();
        if(opt){
            await opt();
        }
        } while (opt);    
    }
}

module.exports = {
    pausa,
    input,
    crearMenu
}

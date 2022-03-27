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

const crearMenu = async(arrOption, customColor, heders, logingID )=>{
    let opt = true;
    color.setTheme({
        customColor
    });
const crearOpciones = arrOption.map((element, index)=>{
        idx = index+1
        
        return {
            value: element[1],
            name: `${`${idx}.`.customColor} ${element[0]}`
        }
    })

    crearOpciones.push({
        value: false,
        name: `${'0.'.customColor} Salir`
        
    })

    const menu = async()=>{
        heders();
        const {opcion} = await inquirer.prompt([
            {
                type: 'list',
                name: 'opcion',
                message: 'Seleccione Una Opcion'.customColor,
                choices: crearOpciones
            }
        ]);
        
        return opcion;
    }

         opt =  await menu();
         if(typeof(opt) == 'function'){
             if(logingID){
                await opt(logingID);    
                while (opt ) {
                    color.setTheme({
                        customColor
                    });
                    opt = await menu();
                    if(opt){
                        await opt(logingID);  
                    }
                }  
             }else{
                 await opt();    
                 while (opt ) {
                     color.setTheme({
                         customColor
                     });
                     opt = await menu();
                     if(opt){
                         await opt();  
                     }
                 }    
             }
         }else{
             return opt;
         }
    
}

module.exports = {
    pausa,
    input,
    crearMenu
}

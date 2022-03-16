const inquirer = require('inquirer');
require('colors');



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

const dataBaseFind = async (Clase ,parametro, value, validator = false, log = false, )=>{

    const buscar = async(paramFind, value)=>{
        
       const existe =  await Clase.find(paramFind)
       if(validator){

           if( existe.length !== 0){
               if(log){
   
                   console.log(`${value} ya registrado!!!`);
               }
               return true;
           }else{
               return false
           }     
       }else{
           return existe;
       }
   };
   
const buscarUsuarios = async ()=>{

    return await Clase.find().lean();
  }

 const findOptions = {
     nombre: await buscar({nombre: value }, 'nombre'),
     email: await buscar({email: value }, 'email'),
     numero: await buscar({numero: value }, 'numero'),
     allUsers: await buscarUsuarios(),
 }

 const find = findOptions[parametro] 
 return find


}

    
module.exports = {
    pausa,
    input,
    dataBaseFind
}

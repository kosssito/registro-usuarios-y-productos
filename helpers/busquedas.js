const Categoria = require('../models/categorias');
const Usuario = require('../models/usuarios');

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
if (Clase == Usuario){

    const findOptions = {
        nombre: await buscar({nombre: value }, 'nombre'),
        email: await buscar({email: value }, 'email'),
        numero: await buscar({numero: value }, 'numero'),
        allFind: await buscarUsuarios(),
    }
    return findOptions[parametro] 
}

if (Clase == Categoria){

    const findOptions = {
        nombre: await buscar({nombre: value }, 'Categoria'),
        // email: await buscar({email: value }, 'email'),
        // numero: await buscar({numero: value }, 'numero'),
        // allFind: await buscarUsuarios(),
    }
    return findOptions[parametro] 
}


 
}



module.exports={
    dataBaseFind
}
const {dataBaseFind} = require('../helpers/busquedas')
const { headerBusquedasUsuarios } = require('../helpers/heders')
const { input, pausa } = require('../inquirer/inquirer')
const Usuario = require('../models/usuarios')
const  loging  = require('../helpers/loging')

const findName = async()=>{
    await buscar('nombre')
 }
 const findEmail = async()=>{
     await buscar('email')
  }
  const findNumero = async()=>{
     await buscar('numero')
  }
  const findAll = async()=>{
     await buscar('allFind')
  }
 
 const buscar = async(parametro)=>{
     
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
 
     if(parametro == 'allFind'){
         if(await loging(['yellow'])){
         const data = await dataBaseFind(Usuario,'allFind');
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

 module.exports = {
    findName,
    findEmail,
    findNumero,
    findAll
 }
const mongoose = require('mongoose');
require('colors');

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_CNN)
        console.log('╔═══════════════════════════╗'.magenta);
        console.log('  conectado a Base de datos'.magenta);
        console.log('╚═══════════════════════════╝'.magenta);

    }catch(error){
        console.log(error);
        throw new Error('Error al conectarse a la base de datos');
    }


}

const desconectar = async ()=>{
    
  await mongoose.connection.close()
}
 
module.exports = {
    connectDB,
    desconectar

}

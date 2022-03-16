const Usuario = require('../models/usuarios.js')


const modificarUsuario = async (id , update)=>{

  return await Usuario.findByIdAndUpdate(id, update)
}

const borarUsuario = async (id)=>{

  return await Usuario.findByIdAndDelete(id)
}



module.exports = {
  
  modificarUsuario,
  borarUsuario
}
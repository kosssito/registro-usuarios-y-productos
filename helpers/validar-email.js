

const validarEmail = (email) => {
    
   return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email) )
    
  }



module.exports = {
    validarEmail
}
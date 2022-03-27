const {Schema, model} = require('mongoose');

const UsuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    numero:{
        type: String,
        required: [true, 'El nuemro es obligatorio']
    },
    estado:{
        type: Boolean,
        default: true,
        required: true
    }

},{
    timestamps: true,
    versionKey: false
})


module.exports = model( 'Usuario', UsuarioSchema)
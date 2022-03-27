const {model, Schema} = require('mongoose');

const productosSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true,
        uppercase: true
    },
    estado:{
        type: Boolean,
        default: true,
        required: true
    },
    usuario:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    categoria:{
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true
    },
    cantidad:{
        type: Number,
        default: 0
    },
    descripcion:{
        type: String,
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
})

module.exports = model('Producto', productosSchema )


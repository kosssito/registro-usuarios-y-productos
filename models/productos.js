const {model, Schema} = require('mongoose');

const productosSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    estado:{
        type: Boolean,
        default: true,
        required: true
    },
    usuarios:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    categoria:{
        type: Schema.Types.ObjectId,
        ref: 'Categorias',
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


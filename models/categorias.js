const {Schema, model} = require('mongoose');

const CategoriaSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true,
        uppercase: true
        
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    estado: {
        type: Boolean,
        default: true
    }
},
{
    timeseries: true,
    versionKey: false
})

module.exports = model('Categoria', CategoriaSchema)
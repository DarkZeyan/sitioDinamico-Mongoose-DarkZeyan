const mongoose = require('mongoose');
//Creamos un Schema (nuestra db)
let Schema = mongoose.Schema;

// Crear colleccion de la DB
let pintoresSchema = new Schema({
    nombre:{
        type: String,
        required: [true, 'Se requiere el nombre del pintor']
    },
    corriente:{
        type: String,
        required: [true, 'Se requiere la corriente artistica']
    },
    nacionalidad:{
        type: String
    },
    pintura: {
        type: String
    },
    biografia:{
        type: String,
        required:[true,'Se requiere su biografia']
    },
    nacimiento:{
        type:String,
        required:[true,'Se requiere su fecha de nacimiento']
    },
    fallecimiento:{
        type:String,
        required:[true,'Se requiere su fecha de fallecimiento']
    }
});
module.exports = mongoose.model('pintores', pintoresSchema);
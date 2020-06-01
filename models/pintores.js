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
    }

});
module.exports = mongoose.model('pintores', pintoresSchema);
// Declaramos dependencias.
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
//Creamos una constante  para el valor del puerto.
const port = process.env.PORT || 3000;

//Emplear rutas
let pintoresRouter = require('./routes/pintor');

//Sitio web y HBS
const app = express();
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials/');
app.use(express.static(__dirname + '/public'));

//Vamos a decirle a express la ruta a emplear
app.use('/',pintoresRouter);
// Conexion con MongoDB
mongoose.Promise = global.Promise;
const cadena  =  'mongodb+srv://zeyan:altair842@e-escobar-jorgecbtis122-kjbmi.azure.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(cadena,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log('Conexion exitosa')
    })
    .catch(err=>console.log(err));
// Arrancar sv web
app.listen(port,()=>{
    console.log('Escuchando el puerto...')
})
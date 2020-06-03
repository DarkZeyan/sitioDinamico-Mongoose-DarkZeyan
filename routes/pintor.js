const express = require('express');
// Vamos a routear  a los pintores
let pintor = require('../controllers/pintoresController.js')

//Creamos nuestras rutas
let router = express.Router();

router.get('/',pintor.list);
router.get('/davinci',(req,res)=>{
    res.render('davinci' ,
        {
            nombreAlumno : "Jorge Eduardo Escobar Bugarini",
            grupo : "4° E",
            year : new Date().getFullYear(),
            titulo : "Leonardo da Vinci"
        });
});
router.get('/vangogh', (req, res)=>{
    res.render('vangogh' ,
        {
            nombreAlumno : "Jorge Eduardo Escobar Bugarini",
            grupo : "4° E",
            year : new Date().getFullYear(),
            titulo : "Vincent van Gogh"
        });
});
router.get('/velazquez', (req, res)=>{
    res.render('velazquez',
        {
            nombreAlumno : "Jorge Eduardo Escobar Bugarini",
            grupo : "4° E",
            year : new Date().getFullYear(),
            titulo : "Diego Velazquez"
        });
});
router.get('/picasso', (req, res)=>{
    res.render('picasso',
        {
            nombreAlumno : "Jorge Eduardo Escobar Bugarini",
            grupo : "4° E",
            year : new Date().getFullYear(),
            titulo : "Pablo Picasso"
        } )
});
router.get('/datos', (req,res)=>{
    res.render('datos',{
        nombreAlumno : "Jorge Eduardo Escobar Bugarini",
        docente: "Raul Toledo",
        grupo : "4° E",
        titulo : "Datos del Alumno",
        fecha: new Date(Date.now()),
        fechaCreacion: new Date(2020,6,03,1,20)
    })
});
router.get('/dali',(req,res)=>{
   res.render('dali',{
       nombreAlumno : "Jorge Eduardo Escobar Bugarini",
       grupo : "4° E",
       year : new Date().getFullYear(),
       titulo : "Salvador Dalí"
   })
});
module.exports = router;
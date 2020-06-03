let mongoose = require('mongoose');
//Lo enlazamos al modelo
let pintores = require('../models/pintores');

let pintoresController = {};

// Listar -> Find
pintoresController.list = (req,res)=>{
    pintores.find({})
        .limit(20)
        .skip(0)
        .exec((err,pintor)=>{
            if(err){
                console.log('Error: ', err);
            }
            res.render('../views/index',{
                pintores:pintor,
                titulo: "Listado de Pintores",
                year: new Date().getFullYear(),
                nombreAlumno : "Jorge Eduardo Escobar Bugarini",
                grupo : "4° E",
            })
        })
}
module.exports = pintoresController;
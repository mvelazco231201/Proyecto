const { Router } = require("express");
const ruta = Router();
const cors = require("cors");
const _ = require("underscore");

const Estructura = require("../public/estructura")
let estruct = new Estructura();

ruta.get("/peliculas/", (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send(estruct);
});

const Pelicula = require("../public/pelis");

ruta.post("/peliculas/new", cors(), (req, res) => {
    const peli = new Pelicula(req.body.id, req.body.nombre, req.body.director, req.body.año, req.body.calificacion);
    let b = estruct.buscar(req.body.id);
    if(!peli) {
        res.set('Access-Control-Allow-Origin', '*');
        res.status(500).send("ERROR: llene correctamente los datos solicitados");
    }
    else if(b!=null){
        res.set('Access-Control-Allow-Origin', '*');
        res.status(500).send("ID ya está en uso.")
    }
    else{
        estruct.agregar(peli);
        res.set('Access-Control-Allow-Origin', '*');
        res.status(200).send("Agregado");
    }

});

ruta.delete("/peliculas/:id",  (req,res) => { 
    const num = parseInt(req.params.id);
    let pos = estruct.indice(num);
    if(pos === null){
        res.set('Access-Control-Allow-Origin', '*');
        res.status(500).send("ID no encontrado.")
    }
    else{
        estruct.estruct.splice(pos,1);
        res.set('Access-Control-Allow-Origin', '*');
        res.status(200).send("Eliminado");
    }
});

ruta.put("/peliculas/:id", cors(), (req,res) => {
    const id = parseInt(req.params.id);
    const {nombre, director, año, calificacion} = req.body;
    let bool = false;
    _.each(estruct.estruct, (peli, i) => {
        if(peli.id == id){
            peli.nombre = nombre;
            peli.director = director;
            peli.año = año;
            peli.calificacion = calificacion;
            bool = true;
        }
    });
    if(bool){
        res.set('Access-Control-Allow-Origin', '*');
       res.status(200).send("Actualizado");
    }
    else {
        res.set('Access-Control-Allow-Origin', '*');
        res.status(500).send("ID incorrecto");
    }
});
 
module.exports = ruta;
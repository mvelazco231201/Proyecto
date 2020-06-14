const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.use((req, res, next) => {
     res.setHeader('Access-Control-Allow-Origin', '*'); 
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); 
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
     res.setHeader('Access-Control-Allow-Credentials', true); 
     next();
});


    app.use(bodyparser.urlencoded({ extended: false }));
    app.use(bodyparser.json());

    //configuracion a espaciado json
    app.set("json spaces", 2);

    //Iniciando servidor
    app.listen(3000, () => {
        console.log('Iniciando el servidor...');
    });

    //conexion a rutas
    app.use(require("./2/rutas"))


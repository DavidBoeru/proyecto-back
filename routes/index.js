//*---- importaciones
const express = require("express");
const router = express.Router();
const fs = require("fs");

const PATH_ROUTES = __dirname;

// funcion para quitarle el .js
const removeExtension = (fileName) => {
     //! tracks.js [tracks]  <= asi se quedaria, shift para que coja el primer array
     return fileName.split('.').shift();
}

//funcion para leer el directorio de una manera asincrona cual? el de path_routes
fs.readdirSync(PATH_ROUTES).filter((file) => {

  const name = removeExtension(file) //index, tracks
  if(name !== 'index'){
    console.log(`cargando ruta ${name}`);
      router.use(`/${name}`, require(`./${file}`))
    }
});


//!---------- exportaciones
module.exports = router;
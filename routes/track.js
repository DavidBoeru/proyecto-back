//*-------- importaciones
const express = require("express");
const router = express.Router();
const {getItems,getItem, createItem, updateItem, deleteItem} = require("../controllers/tracks");
const{ validatorCreateItem, validatorGetItem} =  require("../validators/tracks");
const customHeader = require("../middleware/customHeader");


//TODO http://localhost/tracks GET, POST, DELETE, PUT
//! ruta que nos lista los items
router.get("/", getItems);

//! obtener detalle
router.get("/:id",validatorGetItem, getItem);

//! ruta que crea un registro
router.post("/",validatorCreateItem, createItem);

//! actualizar un registro
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);

//!borrar un registro
router.delete("/:id",validatorGetItem, deleteItem)
 
//!-------- exportamos 
module.exports = router;
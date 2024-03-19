
const { storageModel } = require("../models");
 const PUBLIC_URL = process.env.PUBLIC_URL;
/** 
 * OBTENER LISTA DE LA BASE DE DATOS!
 * @param {*} req
 * @param {*} res
*/
const getItems = async (req, res) => {
    const data =  await storageModel.find({});
   
    res.send({data});
};
/** 
 * OBTENER un detalle
 * @param {*} req
 * @param {*} res
*/
const getItem = (req, res) => {};

/** 
 * INSERTAR UN REGISTRO
 * @param {*} req
 * @param {*} res
*/
const createItem = async(req, res) => {
      const {body, file} = req
     console.log(file);
     const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
     }
    const data =  await storageModel.create(fileData)
     res.send({data});
};

/** 
 * ACTUALIZAR UN REGISTRO
 * @param {*} req
 * @param {*} res
*/
const updateItem = (req, res) => {};

/** 
 * ELIMINAR UN REGISTRO
 * @param {*} req
 * @param {*} res
*/
const deleteItem = (req, res) => {};



//!----- exportaciones
module.exports = {
 getItems,
 getItem, 
 createItem, 
 updateItem,
 deleteItem 
};
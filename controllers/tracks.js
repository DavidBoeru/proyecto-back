const {matchedData} = require("express-validator");
const { tracksModel } = require("../models");
const handleHttpError = require("../utils/handleError")
/** 
 * OBTENER LISTA DE LA BASE DE DATOS!
 * @param {*} req
 * @param {*} res
*/
const getItems = async (req, res) => {

    try {
        const data =  await tracksModel.find({});
        res.send({data}); 
    } catch (e) {
        handleHttpError(res, 'error_get_items');
    };

};
/** 
 * OBTENER un detalle
 * @param {*} req
 * @param {*} res
*/
const getItem = async(req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.findById(id);
        res.send({data})
    } catch (error) {
        handleHttpError(res, "error_get_item");
    }
};

/** 
 * INSERTAR UN REGISTRO
 * @param {*} req
 * @param {*} res
*/
const createItem = async(req, res) => {
     
    try {
           const body = matchedData(req)
            const data =  await tracksModel.create(body)
        res.send({data}); 
    } catch (e) {
        handleHttpError(res, "error_create_items");
    }
    
};

/** 
 * ACTUALIZAR UN REGISTRO
 * @param {*} req
 * @param {*} res
*/
const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req);
        const data = await tracksModel.findOneAndUpdate(
            { _id: id }, // Utiliza un objeto para especificar el criterio de búsqueda
            body, // Los datos a actualizar
            { new: true } // Opciones adicionales, en este caso, para devolver el documento actualizado
        );
        res.send({ data }); 
    } catch (e) {
        handleHttpError(res, "error_update_items");
    }
};

/** 
 * ELIMINAR UN REGISTRO
 * @param {*} req
 * @param {*} res
*/
const deleteItem = async(req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.deleteOne({_id: id});
        res.send({data})
    } catch (e) {
        handleHttpError(res, "error_delete_item");
    }
};



//!----- exportaciones
module.exports = {
 getItems,
 getItem, 
 createItem, 
 updateItem,
 deleteItem 
};
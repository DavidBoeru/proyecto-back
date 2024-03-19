const multer = require("multer");

const storage = multer.diskStorage({
    destination:function(req, file, cb){
          const pathStorage = `${__dirname}/../storage`
          cb(null, pathStorage)
    },
    filename:function(req, file, cb){
          // los artivos tienen extension

          const ext = file.originalname.split(".").pop();
           const filename = `file-${Date.now()}.${ext}`  //nos devuelve un numero entero
          cb(null, filename)
    },
})

const uploadMiddleware = multer({ storage });


//!----- exportamos
module.exports = uploadMiddleware;
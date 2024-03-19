
const mongoose = require("mongoose");

const dbConnect = async () => {
    const DB_URI = process.env.DB_URI;
    try{
        //CONECTAMOS LA BASE DE DATOS
        const db = await mongoose.connect(DB_URI);

        //ahora nos traemos el host y el name
        const {name, host} = db.connection;
 console.log(`conectada la DB✅ con el HOST:${host}, y el NAME:${name}`)
    }catch{  
    console.log("no se ha conectado la DB❌ ", error.message);
    }    
};
   

//! --- exportamos
module.exports = dbConnect;
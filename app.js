
//* ------ REQUERIMOS LIBRERIAS
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");
const app = express();
// le demos a la app que haga uso de cors
app.use(cors())
app.use(express.json())
app.use(express.static("storage"));

//* nos conectamos a la db
dbConnect();


//* traemos el puerto
const PORT = process.env.PORT;


//* cloudinary
const { configCloudinary } = require("./middleware/files.middleware");

configCloudinary();


//* ------------------ limitaciones de cantidad en el back end
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: false }));


//! --------------- generamos un error de cuando no see encuentre la ruta
app.use("*", (req, res, next) => {
    const error = new Error("Route not found");
    error.status = 404;
    return next(error);
  });
  
  //! ------------------> cuando el servidor crachea metemos un 500 ----------
  app.use((error, req, res) => {
    return res
      .status(error.status || 500)
      .json(error.message || "unexpected error");
  });
  

//* --------- AQUI VAN LAS RUTAS!
app.use("/api", require("./routes"))

//! prueba
const UserRoutes = require("./routes/user.routes");

app.use("/api/v1/users/", UserRoutes);



//* escuchamos servidor
app.listen(PORT, () => {
console.log(`app lista por http://localhost:${PORT}`);
})


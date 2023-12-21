(async () => {

const express = require("express")
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
const app = express()
const appRouter = require('./routes/app.routes');

//Configuración del engine
app.engine(
    "hbs",
    handlebars.engine({
        extname: "hbs",
        //Plantilla principal
        defaultlayout: "main",
    })
);

//Setear motor 
app.set("view engine", "hbs")
app.set("views", `${__dirname}/views`);

//Public
app.use(express.static(`${__dirname}/public`));

//Routes
app.get('/', (req, res) => {
    res.render("index", {
        title: "Titulo nuevo",
        nombre: "Ivanna",
    });
})

try{

//Definir endpoints
app.get("/", async(req, res) =>{
    res.send("<h1>MI SERVIDOR EXPRESS - TERCERA ENTREGA</h1>")
})

app.use("/", appRouter)


//SERVIDOR
const port = 8080
app.listen(port, () => {
    console.log(`Express Server listening at http://localhost:${port}`)
})
}
catch (err) {
    console.log(err)
  }


})()
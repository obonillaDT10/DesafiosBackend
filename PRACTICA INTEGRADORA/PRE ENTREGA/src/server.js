(async () => {

const express = require("express")
const app = express()
const appRouter = require('./routes/app.routes');

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
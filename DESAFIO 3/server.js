const express = require("express")
const app = express()
const ProductManager = require('./ProductManager');

const productManager = new ProductManager("products.json");

//Definir endpoints
app.get("/", async(req, res) =>{
    res.send("<h1>MI SERVIDOR EXPRESS - TERCERA ENTREGA</h1>")
})


app.get("/products", async(req, res) =>{
    const limit = req.query.limit
    const products = await productManager.getProducts()
    if (limit){
        return res.send(products.slice(0,limit))
    }

   return res.send(products)
})

app.get("/products/:pid", async(req, res) =>{
   const pid = req.params.pid
   console.log(pid)
   const product = await productManager.getProductById(+pid)
   console.log(product)
   if (product){
    res.send(product)
}
else (res.status(404).json({error: `El producto con el id ${pid} no se encuentra. Intente de nuevo por favor.`}))
})



const port = 8080
app.listen(port, () => {
    console.log(`Express Server listening at http://localhost:${port}`)
})

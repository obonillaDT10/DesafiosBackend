const fs = require('fs/promises');
const path = require("path");//importo el modulo de fileSystemPath para pasar de una manera más facil la ruta donde voy a almacenar mis productos.
const filePath = path.join(__dirname, "products.json"); //COPIADO HOY

class ProductManager {
  constructor(filePath) {
    this.filePath = filePath; //RECIEN AGREGADO HOY
    this.products = [];
    this.lastProductId = 0;
  }

  async getProducts() {
    const datos = await fs.readFile(this.filePath, "utf-8");
    const products = JSON.parse(datos)
    if (products.length > 0) {
      return products;
    }
    else {
      return []; // Devuelve un array vacío si no hay productos
    }
  }

  async getProductById(id) {
    const datos = await fs.readFile(this.filePath, "utf-8");
    const products = JSON.parse(datos)
    const product = products.find((producto) => producto.id === +id);
    console.log(product)
    return product;
  }
}
 

module.exports = ProductManager;

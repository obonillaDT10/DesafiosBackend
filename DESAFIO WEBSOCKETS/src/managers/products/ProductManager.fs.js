const fs = require('fs/promises');

class ProductManager {
  constructor(filePath) {
    this.filePath = filePath; 
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

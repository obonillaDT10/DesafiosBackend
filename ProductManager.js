
class ProductManager {
    constructor() {
      this.products = [];
      this.lastProductId = 0;
    }
  
    addProduct(product) {
      if (!product.titulo || !product.descripcion || !product.precio || !product.thumbnail || !product.code || !product.stock) {
        console.log('Error: Todos los campos son obligatorios.');
        return;
      }
  
      const existingProduct = this.products.find((p) => p.code === product.code);
      if (existingProduct) {
        console.log('El producto ya existe');
        return;
      }
  
      const newProductId = this.lastProductId + 1;
      product.id = newProductId; // Para asignar un ID único al producto
      this.lastProductId = newProductId;
      this.products.push(product); // Para agregar el producto a la lista de productos
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((producto) => producto.id === id);
      return product; 
    }

    deleteProduct(id) {
      const productIndex = this.products.findIndex((producto) => producto.id === id);
      if (productIndex !== -1) {
        this.products.splice(productIndex, 1);
        console.log(`Producto con ID ${id} eliminado exitosamente.`);
      } else {
        console.log(`No se encontró ningún producto con ID ${id}.`);
      }
    }
  }

  

  const productManager = new ProductManager();

  productManager.addProduct({
    titulo: 'GTA VI',
    descripcion: 'Juego de PS4',
    precio: 60.000,
    thumbnail: 'imagen1.jpg',
    code: 'AB100',
    stock: 80,
  });

  productManager.addProduct({
    titulo: 'Call of Duty',
    descripcion: 'Juego de PC',
    precio: 50.000,
    thumbnail: 'imagen2.jpg',
    code: 'AB101',
    stock: 50,
  });

  productManager.addProduct({
    titulo: 'Omar',
    descripcion: 'xxxxx',
    precio: 50.000,
    thumbnail: 'imagen2.jpg',
    code: 'AB101',
    stock: 50,
  });
  
  console.log("ESTE ES UN GET ALL PRODUCTS")
  const products = productManager.getProducts();
  console.log('Lista de productos:', products, "\n");

  console.log("ESTE ES UN GET BY ID")
  const productId = 3; 
  const product = productManager.getProductById(productId);
  if (product) {
    console.log('Producto encontrado:', product);
  } else {
    console.log('Producto no encontrado');
  }

  console.log("ESTE ES UN DELETE PRODUCT");
  const productIdToDelete = 2; 
  productManager.deleteProduct(productIdToDelete);




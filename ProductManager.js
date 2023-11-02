//Realizar una clase ProductManager
//Debe crearse como un array vacio
//cada producto tiene que tener: titulo, descripcion,precio,thumbnail,code,stock
//debe contar con metodo addProduct. Al agregarlo, debe crearse con un id automincrementable
//debe contar con un metodo getProdcuts el cual debe devolver el array con todos los productos creados hasta el momento
//debe contar con un getProdcutById el cual debe buscar en el array el producto que coincida con el id. 
//En caso de no coincidir ningun id mostrar por consola un error "not found"

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
      return product; // Devolver el producto encontrado o undefined si no se encuentra
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
  
  const products = productManager.getProducts();
  console.log('Lista de productos:', products);

  const productId = 1; 
  const product = productManager.getProductById(productId);
  if (product) {
    console.log('Producto encontrado:', product);
  } else {
    console.log('Producto no encontrado');
  }




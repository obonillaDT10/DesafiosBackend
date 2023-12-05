const { Router } = require("express");
const CartsManager = require('../../managers/carts/CartManager.fs');


const cartManager = new CartsManager('data/carts.json');

const router = Router();

// GET /api/carts
router.get("/", async (req, res) => {
    try {
        const carts = await cartManager.getCarts();
        res.status(200).json({ status: 200, carts });
    } catch (error) {
        console.error("Error en la ruta GET /api/carts:", error);
        res.status(500).json({ status: 500, message: 'Error en la solicitud GET /api/carts' });
    }
});


//POST
router.post("/", async (req, res) => {
   
    try{
        const cart = await cartManager.addCart()

        if (cart) {
            res.status(200).json({ status: 200, message: 'Cart added successfully', cart});
          } else {
            res.status(400).json({ status: 404, message: 'Failed to add the Cart' });
          }
        } catch (error) {
            console.log(error)
          res.status(500).json({status: 500, message: 'Error processing the request' });
        }
    }
)

//GET cid
router.get("/:cid", async (req, res) => {
    const id = req.params.cid

    try{
        const cart = await cartManager.getCartById(id)

        if(cart){
            res.status(200).json({ status: 200, cart });
        } else {
            res.status(404).json({ status: 404, message: `The Cart with ID: ${id} is not found. Please try again with a different ID` });
        }
    } catch (error) {
        console.log("Error retrieving the Cart", error);
        res.status(500).json({ status:500, message: 'Error retrieving the Cart' });
    }
})


//POST cid
router.post("/:cid/product/:pid", async (req, res) => {
    try {
        const cartId = req.params.cid;
        const productId = req.params.pid;

        const result = await cartManager.addProductToCart(cartId, productId)

        if (result.cartNotFound) {
            res.status(404).send({ status: 404, message: `Cart with id: ${cartId} not found` });
        } else if (result.productNotFound) {
            res.status(404).send({ status: 404, message: `Product with id: ${productId} not found` });
        } else if (result.cartUpdated) {
            // Obtener el carrito actualizado después de agregar el producto
            const updatedCart = await cartModel.findOne({ _id: cartId });

            res.status(200).send({ status: 200, message: `Product with id: ${productId} added to cart`, cart: updatedCart });
        }
    } catch (err) {
        console.error("Error adding product to cart", err);
        res.status(500).send({ status: 500, message: "An error has occurred while adding the product to the cart" });
    }
});

module.exports = router;
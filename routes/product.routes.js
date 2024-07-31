const express = require("express");
const {
  getProducts,
  getProduct,
  addProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/product.controller.js");
const router = express.Router();

// All products get
router.get("/", getProducts);

// single product get
router.get("/:id", getProduct);

// Add product
router.post("/", addProduct);

// Update Product
router.put("/:id", updateProduct);

// Delete Product
router.delete("/:id", deleteProduct);

module.exports = router;

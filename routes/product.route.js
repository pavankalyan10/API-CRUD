const express = require("express");
const {
  getProduct,
  getProducts,
  createProduct,
  updatProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.put("/:id", updatProduct);
router.delete("/:id", deleteProduct);

module.exports = router;

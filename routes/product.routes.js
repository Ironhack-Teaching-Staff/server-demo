const express = require("express");
const router = express.Router();

const Product = require("../models/Product.model")
const { isAuthenticated } = require("../middleware/jwt.middleware");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.post("/", isAuthenticated, (req, res, next) => {
    const { productName, price, quantity} = req.body;
    const {_id} = req.payload;

    Product.create({productName, price, quantity, userId: _id})
        .then(createdProduct => res.json(createdProduct))
        .catch(err => console.log(err))
  });

router.get("/:productId", (req, res, next) => {
  const {productId} = req.params;

  Product.findById(productId)
        .then(foundProduct => {
          if(!foundProduct){
            res.status(400).json("Product wasn't found")
          }
          else {
            res.json(foundProduct)
          }
        })
        .catch(err => console.log(err))
});

module.exports = router;

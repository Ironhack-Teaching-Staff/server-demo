const express = require("express");
const router = express.Router();
const Product = require("../models/Product.model")

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/:productId/product-page", (req, res, next) => {
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

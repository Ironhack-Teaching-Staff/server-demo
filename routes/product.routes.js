const express = require("express");
const router = express.Router();

const { isAuthenticated } = require("../middleware/jwt.middleware");

const Product = require("../models/Product.model");

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

module.exports = router;

import express from "express";
import {
  getAllProducts,
  getProductsByCategory,
} from "../models/product-model/product.model.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  const result = await getAllProducts();
  res.send(result);
  console.log(result);
});

router.post("/", async (req, res, next) => {
  const result = await getProductsByCategory(req.body);
  res.send(result);
});

export default router;

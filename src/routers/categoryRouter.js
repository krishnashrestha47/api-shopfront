import express from "express";
import { getAllCategories } from "../models/category-model/category.model.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  const result = await getAllCategories();
  res.send(result);
});

export default router;

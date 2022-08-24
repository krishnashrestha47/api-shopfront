import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("product router got hit");
});

export default router;

import "dotenv/config";
import express from "express";

const PORT = process.env.PORT || 8000;

const app = express();

//database connection
import dbConnection from "./src/config/dbConnect.js";
dbConnection();

//routers
import productRouter from "./src/routers/productRouter.js";

app.use("/api/v1/products", productRouter);

app.get("/", (req, res, next) => {
  res.json({
    message: "Welcome to the api endpoint",
  });
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`The server is running in http://localhost:${PORT}`);
});

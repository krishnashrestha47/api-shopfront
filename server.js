import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const PORT = process.env.PORT || 8000;

const app = express();

//middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));

app.use(express.json());

//database connection
import dbConnection from "./src/config/dbConnect.js";
dbConnection();

//routers
import productRouter from "./src/routers/productRouter.js";
import categoryRouter from "./src/routers/categoryRouter.js";

app.use("/api/v1/products", productRouter);
app.use("/api/v1/categories", categoryRouter);

app.get("/", (req, res, next) => {
  res.json({
    message: "Welcome to the api endpoint",
  });
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`The server is running in http://localhost:${PORT}`);
});

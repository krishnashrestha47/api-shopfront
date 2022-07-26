import "dotenv/config";
import express from "express";

const PORT = process.env.PORT || 8000;

const app = express();

app.get("/api/v1", (req, res, next) => {
  res.json({
    message: "Welcome to the api endpoint",
  });
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`The server is running in http://localhost:${PORT}`);
});

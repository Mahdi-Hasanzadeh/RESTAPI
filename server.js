import express from "express";
import mongoose from "mongoose";
import productRoute from "./productsRoute.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(express.json());

const dbUrl = "mongodb://localhost:27017/RestAPI";

app.use("/api", productRoute);

mongoose
  .connect(dbUrl)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

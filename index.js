const express = require("express");
const app = express();
const Product = require("./models/product.model.js");
const mongoose = require("mongoose");
const ProductRouter = require("./routes/product.routes.js");

// Middlewares
app.use(express.json());

// Routes
app.use("/api/products", ProductRouter);

app.get("/", (req, res) => {
  res.send("Hello This is Node API");
});

mongoose
  .connect(
    // "mongodb+srv://kundanp:gEKKQo1gTYB1A7VC@backenddb.18pkq0q.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
    "mongodb+srv://kundanp:gEKKQo1gTYB1A7VC@backenddb.18pkq0q.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Database Connected Successfully..!!");
    app.listen(3000, () => {
      console.log(`Server is Running on 3000`);
    });
  })
  .catch(() => {
    console.log("Connection Failed");
  });

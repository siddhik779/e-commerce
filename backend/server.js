const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initialize Express
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = "mongodb://localhost:27017/ecommerce"; // Local MongoDB connection string
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Product Schema and Model
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
});

const Product = mongoose.model("Product", productSchema);

// API Endpoints
app.get("/", (req, res) => {
  res.send("Welcome to the E-commerce Backend!");
});

// Get All Products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a Product
app.post("/products", async (req, res) => {
  const { name, price, description, image } = req.body;
  const product = new Product({ name, price, description, image });
  try {
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

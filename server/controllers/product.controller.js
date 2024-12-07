import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ success: false, message: "Server error." });
  }
};

export const createProduct = async (req, res) => {
  // Extract product data from the request body
  const product = req.body;

  // Validate product data
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid product data." });
  }

  // Create a new Product instance
  const newProduct = new Product(product);

  try {
    // Save the product to the database
    await newProduct.save();

    // Respond with success and the saved product data
    return res.status(201).json({
      success: true,
      data: newProduct,
      message: "Product added successfully!",
    });
  } catch (error) {
    // Handle errors during database save
    console.error("Error saving product:", error.message);

    // Respond with 500 Internal Server Error
    return res.status(500).json({
      success: false,
      message: "Server error while saving the product.",
    });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Product not found by this ID." });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    // Handle errors
    console.error("Error updating product:", error.message);
    res.status(500).json({ success: false, message: "Server error." });
  }
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted." });
  } catch (error) {
    console.error("Error deleting product:", error.message);
    res.status(500).json({ success: false, message: "Server error." });
  }
};

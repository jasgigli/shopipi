import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoute from "./routes/product.route.js";
import path from "path";

dotenv.config();

const __dirname = path.resolve(); // For working with absolute paths

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Product routes
app.use("/api/products", productRoute);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Ensure correct static directory for React build files
  app.use(express.static(path.join(__dirname, "client", "dist")));

  // Serve index.html for all other routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}

// Start the server
app.listen(PORT, () => {
  connectDB(); // Establish database connection
  console.log(`Server running at http://localhost:${PORT}`);
});

import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    // Validate required fields
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return {
        success: false,
        message: "Please fill in all the required fields.",
      };
    }

    try {
      const res = await fetch("/api/products", {
        // Fixed typo in endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) {
        const error = await res.json();
        return {
          success: false,
          message: error.message || "Failed to create product.",
        };
      }

      const data = await res.json();
      set((state) => ({ products: [...state.products, data.data] }));
      return {
        success: true,
        message: "Product created successfully.",
      };
    } catch (error) {
      return {
        success: false,
        message: "An error occurred while creating the product.",
      };
    }
  },

  fetchProducts: async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      set({ products: data.data });
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  },

  deleteProduct: async (id) => {
    try {
      await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });
      set((state) => ({
        products: state.products.filter((product) => product._id !== id),
      }));
    } catch (error) {
      console.error("Error deleting product:", error.message);
    }
  },
  updateProduct: async (updatedProduct) => {
    try {
      const res = await fetch(`/api/products/${updatedProduct._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });

      if (!res.ok) {
        const error = await res.json();
        return {
          success: false,
          message: error.message || "Failed to update product.",
        };
      }

      const data = await res.json();
      set((state) => ({
        products: state.products.map((product) =>
          product._id === updatedProduct._id ? data.data : product
        ),
      }));
      return { success: true, message: "Product updated successfully." };
    } catch (error) {
      return {
        success: false,
        message: "An error occurred while updating the product.",
      };
    }
  },
}));

export default useProductStore;

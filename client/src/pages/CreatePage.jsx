import React, { useState, useEffect } from "react";
import useProductStore from "../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const [feedback, setFeedback] = useState(null); // For success/error messages
  const createProduct = useProductStore((state) => state.createProduct);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, message } = await createProduct(newProduct);
    setFeedback({ success, message });

    // Clear feedback after 5 seconds
    setTimeout(() => {
      setFeedback(null);
    }, 5000);

    if (success) {
      setNewProduct({ name: "", price: "", image: "" }); // Reset form on success
    }
  };

  return (
    <div className="container flex flex-col items-center justify-center">
      <h1 className="font-black text-5xl my-4">Create New Product</h1>

      {feedback && (
        <div
          className={`${
            feedback.success
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          } p-4 mb-4 rounded-md`}
        >
          {feedback.message}
        </div>
      )}

      <form
        onSubmit={handleSubmit} // Moved onSubmit to the form
        className="flex flex-col my-12 p-8 bg-gray-200 rounded-md"
      >
        <input
          type="text"
          placeholder="Product Name"
          className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 mb-4 w-96 font-semibold"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />
        <input
          type="number" // Fixed input type
          placeholder="Product Price"
          className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 mb-4 w-96 font-semibold"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Product Image"
          className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 mb-4 w-96 font-semibold"
          value={newProduct.image}
          onChange={(e) =>
            setNewProduct({ ...newProduct, image: e.target.value })
          }
        />
        <button
          type="submit"
          className="bg-blue-500 p-2 rounded-md font-semibold text-white cursor-pointer"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default CreatePage;

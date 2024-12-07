import React, { useState } from "react";
import { toast } from "react-toastify";
import ModalBox from "./ModalBox";
import { Link } from "react-router-dom";
import useProductStore from "../store/product";

const ProductCard = ({ product }) => {
  const deleteProduct = useProductStore((state) => state.deleteProduct);
  const updateProductInStore = useProductStore((state) => state.updateProduct);
  const [openModal, setOpenModal] = useState(false);

  const handleDelete = async (id) => {
    toast.info("Product is being deleted...");
    const response = await deleteProduct(id);
    if (response.success) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  };

  return (
    <>
      {/* Product Card */}
      <div className="flex flex-col justify-between max-w-sm rounded overflow-hidden shadow-lg border border-gray-200 bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="px-6 py-4">
          <h5 className="text-lg font-bold mb-2 text-gray-800">
            {product.name}
          </h5>
          <p className="text-gray-600">
            Price: <span className="font-semibold">${product.price}</span>
          </p>
        </div>
        <div className="px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => setOpenModal(true)} // Open modal on click
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(product._id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 focus:outline-none"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Modal Box */}
      {openModal && (
        <ModalBox
          openModal={openModal}
          setOpenModal={setOpenModal}
          product={product}
          updateProductInStore={updateProductInStore}
        />
      )}
    </>
  );
};

export default ProductCard;

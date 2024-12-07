import { Modal } from "flowbite-react";
import { useState } from "react";
import { toast } from "react-toastify";

const ModalBox = ({
  openModal,
  setOpenModal,
  product,
  updateProductInStore,
}) => {
  const [newProduct, setNewProduct] = useState(product);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await updateProductInStore(newProduct);
      if (response.success) {
        toast.success(response.message);
        setOpenModal(false);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Error updating product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>Edit Product</Modal.Header>
      <Modal.Body>
        <form
          onSubmit={handleSubmit} // Submit form on Save button click
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
            type="number"
            placeholder="Product Price"
            className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 mb-4 w-96 font-semibold"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                price: parseFloat(e.target.value),
              })
            }
          />
          <input
            type="text"
            placeholder="Product Image URL"
            className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 mb-4 w-96 font-semibold"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button
          onClick={handleSubmit}
          className={`bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save"}
        </button>
        <button
          onClick={() => setOpenModal(false)}
          className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400 focus:outline-none"
        >
          Cancel
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalBox;

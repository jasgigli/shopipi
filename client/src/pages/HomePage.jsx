import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useProductStore from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const fetchProducts = useProductStore((state) => state.fetchProducts);
  const products = useProductStore((state) => state.products);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log(products);

  return (
    <div className="container flex flex-col items-center justify-center">
      <h1 className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-2xl font-black my-8">
        Current Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {products.length === 0 && (
        <div>
          <span className="text-gray-400 font-bold mr-2">
            No Products Available 😕
          </span>
          <Link to="/create" className="font-black  hover:underline">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
              Create New Product
            </span>
          </Link>
          🚀
        </div>
      )}
    </div>
  );
};

export default HomePage;

"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  desc: string;
}

const Products = () => {
  const [productData, setProductData] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      setProductData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteHandler = async (id: string) => {
    try {
      const response = await axios.delete(`/api/products/${id}`);
      if (response.status === 200) {
        fetchProducts();
        alert("Product deleted successfully");
      } else {
        alert("Failed to delete Product");
      }
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-xl">
        <thead>
          <tr className="w-full bg-gray-200 font-bold text-gray-700 text-left">
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Category</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-6 py-3">Stock</th>
            <th className="px-6 py-3">Description</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((product) => (
            <tr className="border-b" key={product._id}>
              <td className="px-6 py-4 text-gray-900">{product.name}</td>
              <td className="px-6 py-4 text-gray-900">{product.category}</td>
              <td className="px-6 py-4 text-gray-900">{product.price}</td>

              <td className="px-6 py-4 text-gray-900">{product.stock}</td>
              <td className="px-6 py-4 text-gray-900">{product.desc}</td>
              <td className="px-6 py-4 flex gap-4">
                <Link
                  href={`/dashboard/products/${product._id}/updateProduct`}
                  className="mr-2 px-4 py-2 bg-yellow-400 text-white rounded-xl hover:bg-yellow-500 transition-colors duration-300 text-center"
                >
                  Update
                </Link>
                <button
                  onClick={() => deleteHandler(product._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors duration-300 text-center"
                >
                  Delete
                </button>
                <Link
                  href={`/dashboard/products/${product._id}`}
                  className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors duration-300 text-center"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;

"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UpdateProduct = ({ params }: { params: { id: string } }) => {
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    price: 0,
    stock: 0,
    desc: "",
  });
  const router = useRouter();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const { data } = await axios.get(`/api/products/${params.id}`);
        setProductData(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetchProductData();
  }, [params.id]);

  const handleOnChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `/api/products/${params.id}/`,
        productData
      );
      console.log("Product updated successfully:", response.data);
      router.push("/dashboard/products");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Update Product
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={productData.name}
              placeholder="Product Name"
              className="w-full mt-1 pl-3 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              onChange={handleOnChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={productData.category}
              placeholder="Category"
              className="w-full mt-1 pl-3 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              onChange={handleOnChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={productData.price}
              placeholder="Price"
              className="w-full mt-1 pl-3 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              onChange={handleOnChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Stock
            </label>
            <input
              type="number"
              name="stock"
              value={productData.stock}
              placeholder="Stock"
              className="w-full mt-1 pl-3 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              onChange={handleOnChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="desc"
              value={productData.desc}
              placeholder="Description"
              className="w-full mt-1 pl-3 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 h-24 resize-none"
              onChange={handleOnChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-2 px-4 rounded-md hover:from-purple-700 hover:to-pink-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;

"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AddProductPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    category: "",
    desc: "",
    stock: "",
  });

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post("/api/products", {
      productData,
    });

    if (response.statusText) {
      alert("Product Added Successfully");
      router.push("/dashboard/products");
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-lg bg-white shadow-lg rounded-lg">
      <form className="form space-y-4 " onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          required
          onChange={(e) => handleChange(e)}
          className="w-full flex content-between p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Category"
          name="category"
          required
          onChange={(e) => handleChange(e)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          placeholder="Price"
          name="price"
          required
          onChange={(e) => handleChange(e)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Stock"
          name="stock"
          required
          onChange={(e) => handleChange(e)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          required
          name="desc"
          id="desc"
          rows={5}
          placeholder="Description"
          onChange={(e) => handleChange(e)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;

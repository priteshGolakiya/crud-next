"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddUser = () => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    number: "",
    password: "",
    isAdmin: false,
    isActive: true,
    address: "",
  });

  const router = useRouter();

  const handleOnChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userData.userName || !userData.email) {
      return alert("Please fill in all fields");
    }
    try {
      const res = await axios.post("/api/user", {
        userData,
      });

      if (res) {
        setUserData({
          userName: "",
          email: "",
          number: "",
          password: "",
          isAdmin: false,
          isActive: true,
          address: "",
        });
        alert("user created successfully");
        router.push("/dashboard/users");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-lg bg-white shadow-lg rounded-lg">
      <form className="form space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User Name"
          name="userName"
          required
          onChange={(e) => handleOnChange(e)}
          className="w-full flex content-between p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          onChange={(e) => handleOnChange(e)}
          className="w-full flex content-between p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Number"
          name="number"
          required
          onChange={(e) => handleOnChange(e)}
          className="w-full flex content-between p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
          onChange={(e) => handleOnChange(e)}
          className="w-full flex content-between p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          name="isAdmin"
          id="isAdmin"
          onChange={(e) => handleOnChange(e)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="false">Is Admin?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <select
          name="isActive"
          id="isActive"
          onChange={(e) => handleOnChange(e)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="true">Is Active?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <textarea
          required
          name="address"
          id="address"
          rows={5}
          placeholder="Address"
          onChange={(e) => handleOnChange(e)}
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

export default AddUser;

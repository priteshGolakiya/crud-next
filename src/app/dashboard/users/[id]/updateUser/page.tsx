"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { BiMapPin, BiPhone, BiUserCheck, BiUserCircle } from "react-icons/bi";
import { BsMailbox } from "react-icons/bs";
import { FaUserCog } from "react-icons/fa";

const UpdateUser = ({ params }: { params: { id: string } }) => {
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
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await axios.get(`/api/user/${params.id}`);
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [params.id]);

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
    try {
      const response = await axios.put(`/api/user/${params.id}/`, userData);
      console.log("User updated successfully:", response.data);
      router.push("/dashboard/users");
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Update User Profile
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <BiUserCircle className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              name="userName"
              value={userData.userName}
              placeholder="Name"
              className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              onChange={handleOnChange}
            />
          </div>

          <div className="relative">
            <BsMailbox className="absolute top-3 left-3 text-gray-400" />
            <input
              type="email"
              name="email"
              value={userData.email}
              placeholder="Email"
              className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              onChange={handleOnChange}
            />
          </div>

          <div className="relative">
            <BiPhone className="absolute top-3 left-3 text-gray-400" />
            <input
              type="tel"
              name="number"
              value={userData.number}
              placeholder="Phone Number"
              className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              onChange={handleOnChange}
            />
          </div>

          <div className="relative">
            <BiMapPin className="absolute top-3 left-3 text-gray-400" />
            <textarea
              name="address"
              value={userData.address}
              placeholder="Address"
              className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 h-24 resize-none"
              onChange={handleOnChange}
            ></textarea>
          </div>

          <div className="relative">
            <FaUserCog className="absolute top-3 left-3 text-gray-400" />
            <select
              name="isAdmin"
              value={userData.isAdmin.toString()}
              className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 appearance-none bg-white"
              onChange={handleOnChange}
            >
              <option value="false">User</option>
              <option value="true">Admin</option>
            </select>
          </div>

          <div className="relative">
            <BiUserCheck className="absolute top-3 left-3 text-gray-400" />
            <select
              name="isActive"
              value={userData.isActive.toString()}
              className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 appearance-none bg-white"
              onChange={handleOnChange}
            >
              <option value="true">Active</option>
              <option value="false">Disable</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-2 px-4 rounded-md hover:from-purple-700 hover:to-pink-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;

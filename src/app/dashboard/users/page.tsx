"use client";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  _id: string;
  userName: string;
  email: string;
  address: string;
  number: string;
  isAdmin: boolean;
  isActive: boolean;
}

const UserPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get<User[]>("/api/user");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteHandler = async (id: string) => {
    console.log("id::: ", id);
    try {
      const response = await axios.delete(`/api/user/${id}`);
      if (response.status === 200) {
        fetchUsers();
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-xl">
        <thead>
          <tr className="w-full font-bold bg-gray-200 text-gray-700 text-left">
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Number</th>
            <th className="px-6 py-3">Address</th>
            <th className="px-6 py-3">Role</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user: User) => (
              <tr key={user._id} className="border-b">
                <td className="px-6 py-4 text-gray-900">{user.userName}</td>
                <td className="px-6 py-4 text-gray-900">{user.email}</td>
                <td className="px-6 py-4 text-gray-900">{user.number}</td>
                <td className="px-6 py-4 text-gray-900">{user.address}</td>
                <td className="px-6 py-4 text-gray-900">
                  {user.isAdmin ? "ADMIN" : "USER"}
                </td>
                <td className="px-6 py-4 text-gray-900">
                  {user.isActive ? "ACTIVE" : "DISABLED"}
                </td>
                <td className="px-6 py-4 flex gap-4">
                  <Link href={`/dashboard/users/${user._id}/updateUser`}>
                    <button className="mr-2 px-4 py-2 bg-yellow-400 text-white rounded-xl hover:bg-yellow-500 transition-colors duration-300 text-center">
                      Update
                    </button>
                  </Link>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors duration-300 text-center"
                    onClick={() => deleteHandler(user._id)}
                  >
                    Delete
                  </button>
                  <Link href={`/dashboard/users/${user._id}`}>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors duration-300 text-center">
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="px-6 py-4 text-center text-gray-900">
                No user data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserPage;

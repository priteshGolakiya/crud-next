import { notFound } from "next/navigation";
import axios from "axios";

interface User {
  _id: number;
  userName: string;
  email: string;
  address: string;
  number: string;
  isAdmin: boolean;
  isActive: boolean;
}

async function getUser(id: string): Promise<User | null> {
  try {
    const response = await axios.get(`http://localhost:3000/api/user/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}

export default async function SingleUserPage({
  params,
}: {
  params: { id: string };
}) {
  const userData = await getUser(params.id);

  if (!userData) {
    notFound();
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-4">User Profile</h2>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col items-center">
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold">{userData.userName}</h3>
              <p className="text-gray-600">{userData.email}</p>
            </div>

            <hr className="w-full my-4" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div>
                <p className="font-semibold">Phone:</p>
                <p className="text-gray-700">{userData.number}</p>
              </div>
              <div>
                <p className="font-semibold">Address:</p>
                <p className="text-gray-700">{userData.address}</p>
              </div>
              <div>
                <p className="font-semibold">Status:</p>
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    userData.isActive
                      ? "bg-green-200 text-green-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {userData.isActive ? "Active" : "Inactive"}
                </span>
              </div>
              <div>
                <p className="font-semibold">Role:</p>
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    userData.isAdmin
                      ? "bg-yellow-200 text-yellow-800"
                      : "bg-blue-200 text-blue-800"
                  }`}
                >
                  {userData.isAdmin ? "Admin" : "User"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

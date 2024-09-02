import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";

const UsersLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="p-4 container mx-auto">
      <div className="flex flex-col space-y-6">
        <div className="container mx-auto ">
          <h1 className="text-2xl font-semibold mb-6">User</h1>
          <nav className="flex items-center justify-between h-16 px-6 bg-white text-gray-800 rounded-xl shadow-md">
            <Search placeholder="Search User" />
            <Link
              href={"/dashboard/users/add"}
              className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-800 transition-colors duration-400 ease-in-out"
            >
              Add User
            </Link>
          </nav>
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default UsersLayout;

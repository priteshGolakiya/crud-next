import { MdNotifications, MdOutlineChat, MdPublic } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-16 px-6 bg-white text-gray-800">
      <div className="relative flex items-center flex-1 max-w-xs">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
          <span className="text-sm font-semibold">PG</span>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-200">
          <MdOutlineChat size={24} />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>
        <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-200">
          <MdNotifications size={24} />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
            5
          </span>
        </button>
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-200">
          <MdPublic size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

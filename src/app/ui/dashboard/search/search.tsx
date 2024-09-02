import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }: { placeholder: string }) => {
  return (
      <div className="relative flex items-center flex-1 max-w-xs">
        <MdSearch
          className="text-gray-400 absolute left-3 pointer-events-none"
          size={20}
        />
        <input
          type="text"
          placeholder={placeholder}
          className="pl-10 pr-4 py-2 w-full bg-gray-100 text-gray-800 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ease-in-out duration-300"
        />
      </div>
  );
};

export default Search;

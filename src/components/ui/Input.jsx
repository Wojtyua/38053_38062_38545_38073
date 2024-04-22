import { IoMdSearch } from "react-icons/io";

const Input = () => {
  return (
    <div className="flex text-3xl font-bold  bg-gray-800 pl-7 pr-3 gap-2 py-2 rounded-full border-4 border-emerald-600">
      <input
        className="bg-transparent text-gray-50"
        placeholder="Jakieś jedzeinie..."
      />
      <div>
        <button className=" bg-gray-50 text-gray-50 font-bold p-1 rounded-full">
          <IoMdSearch size={32} color="#030712" />
        </button>
      </div>
    </div>
  );
};

export default Input;

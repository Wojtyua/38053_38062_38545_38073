import { Link } from "react-scroll";
import Button from "./ui/Button";

const Navbar = () => {
  return (
    <div className="px-12 py-4 w-full fixed flex justify-between items-center">
      <span className="text-white text-xl font-bold">Calorie Calculator</span>
      <ul className="flex gap-10">
        <li className="bg-gray-900 text-gray-50 font-bold py-2 px-6 rounded-full border-4 border-emerald-600">
        <Link to="landing-page" spy={true} smooth={true} duration={1000} className="cursor-pointer">Home</Link>
        </li>
        <li className="bg-gray-900 text-gray-50 font-bold py-2 px-6 rounded-full border-4 border-emerald-600">
          <Link to="calculator-section" spy={true} smooth={true} duration={1000} className="cursor-pointer">Calorie calculator</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

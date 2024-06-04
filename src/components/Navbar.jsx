import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-12">
      <span className="text-text text-2xl font-bold">Calorie Calculator</span>
      <ul className="flex space-x-12 text-text font-semibold text-lg">
        <li>
          <Link
            to="landing-page"
            spy={true}
            smooth={true}
            duration={1000}
            className="cursor-pointer hover:text-primary transition-colors"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="calculator-section"
            spy={true}
            smooth={true}
            duration={1000}
            className="cursor-pointer hover:text-primary transition-colors"
          >
            Calorie calculator
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

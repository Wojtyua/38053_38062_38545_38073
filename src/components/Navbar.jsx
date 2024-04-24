import Button from "./ui/Button";

const Navbar = () => {
  return (
    <div className="px-12 py-4 w-full fixed flex justify-between items-center">
      <span className="text-white text-xl font-bold">Calorie Calculator</span>
      <ul className="flex gap-10">
        <li>
          <Button>Home</Button>
        </li>
        <li>
          <Button>Calorie calculator</Button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

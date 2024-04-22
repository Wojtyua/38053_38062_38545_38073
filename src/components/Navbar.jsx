import Button from "./ui/Button";

const Navbar = () => {
  return (
    <div className="p-5 fixed flex justify-between w-full">
      <span>Calorie Calculator</span>
      <ul className="flex gap-10">
        <li>
          <Button>Home</Button>
        </li>
        <li>
          <Button>Calculator</Button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

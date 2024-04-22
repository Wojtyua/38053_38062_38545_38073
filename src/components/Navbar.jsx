const Navbar = () => {
  return (
    <div className="p-5 fixed flex justify-between w-full">
      <span>Calorie Calculator</span>
      <ul className="flex gap-10">
        <li>Home</li>
        <li>Calculator</li>
      </ul>
    </div>
  );
};

export default Navbar;

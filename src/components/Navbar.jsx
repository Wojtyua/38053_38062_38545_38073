const Navbar = () => {
  return (
    <div className="fixed flex justify-between w-full">
      <span>Calorie Calculator</span>
      <ul className="flex gap-3">
        <li>Home</li>
        <li>Calculator</li>
      </ul>
    </div>
  );
};

export default Navbar;

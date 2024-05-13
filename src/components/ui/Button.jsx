const Button = ({ children }) => {
  return (
    <button className="bg-gray-900 text-gray-50 font-bold py-2 px-6 rounded-full border-4 border-emerald-600">
      {children}
    </button>
  );
};

export default Button;

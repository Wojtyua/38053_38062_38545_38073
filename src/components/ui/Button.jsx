const Button = ({ children }) => {
  return (
    <button className="bg-slate-700 text-slate-50 font-bold p-2 rounded-lg">
      {children}
    </button>
  );
};

export default Button;

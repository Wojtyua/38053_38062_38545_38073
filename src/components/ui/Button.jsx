const Button = ({ children, type }) => {
  return (
    <button
      className={`text-text px-6 py-3 font-normal tracking-wide rounded-md capitalize hover:-translate-y-1 transition-transform ${
        type === "secondary" ? "bg-secondaryLight" : "bg-primary"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;

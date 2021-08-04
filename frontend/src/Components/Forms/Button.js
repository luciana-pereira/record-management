
const Button = ({ type, children, ...props }) => {
  return (
    <button {...props} className="primary" type={type}>
      {children}
    </button>
  );
};

export default Button;
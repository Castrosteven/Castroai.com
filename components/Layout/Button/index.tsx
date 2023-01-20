const Button = ({ children }) => {
  return (
    <button
      className={` p-2 text-center rounded-2xl text-white bg-CdarkOrange `}
    >
      {children}
    </button>
  );
};
export default Button;

import { FC } from "react";

const Button: FC<{ className?: string }> = ({ children, className }) => {
  return (
    <button
      className={`bg-darkBlue p-2 text-center rounded-lg text-white  ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;

import { FC } from "react";

const Button: FC<{ className?: string }> = ({ children, className }) => {
  return (
    <button
      className={` p-2 text-center rounded-lg text-white border-4 border-orange  ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;

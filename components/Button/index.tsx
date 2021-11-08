import { FC } from "react";

const Button: FC<{ className?: string }> = ({ children, className }) => {
  return (
    <button
      className={` p-2 text-center rounded-2xl text-white bg-CdarkOrange  ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;

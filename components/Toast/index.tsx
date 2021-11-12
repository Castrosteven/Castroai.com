import { FC } from "react";

type ToastProps = {
  msg: string;
  status: "GOOD" | "BAD" | "WARNING";
};

const Toast: FC<ToastProps> = ({ msg, status }) => {
  return (
    <div
      className={`absolute w-full p-2 ${
        status === "GOOD"
          ? "bg-green-300"
          : status === "BAD"
          ? "bg-red-300"
          : status === "WARNING"
          ? "bg-yellow-300"
          : ""
      }`}
    >
      {msg}
    </div>
  );
};
export default Toast;

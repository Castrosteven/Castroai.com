import React from "react";

export default function RegisterForm() {
  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      className=" h-full w-full flex flex-col items-center gap-5"
      onSubmit={(e) => formSubmit(e)}
    >
      <input
        type="text"
        placeholder="Enter Email"
        className="bg-white rounded-lg w-1/2 h-10 p-4"
        required
      />
      <input
        type="password"
        placeholder="Enter Password"
        className="bg-white rounded-lg w-1/2 h-10 p-4"
        required
      />
      <button
        type="submit"
        onClick={() => {
          alert("clicked");
        }}
        className="bg-indigo-400 w-1/2 h-10 rounded-lg hover:bg-indigo-800 hover:text-white"
      >
        Login
      </button>
    </form>
  );
}

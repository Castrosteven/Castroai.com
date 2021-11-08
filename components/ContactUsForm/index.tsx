import { useState } from "react";

const ContactUsForm = () => {
  const initialState = {
    name: "",
    phone: "",
    company: "",
    message: "",
    email: "",
  };

  type formType = typeof initialState;

  const [form, setForm] = useState<formType>(initialState);
  const [res, setRes] = useState(false);
  const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const { status } = res;
    status === 200 ? setRes(true) : setRes(false);
    setForm(initialState);
  };

  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    let newState = { ...form };
    newState[`${name}`] = e.target.value;
    setForm(newState);
  };

  return (
    <form
      action=""
      className="bg-white p-5 rounded-lg "
      onSubmit={(e) => formHandler(e)}
    >
      <div className="md:flex md:space-x-4">
        <div className="md:w-1/2 ">
          <label htmlFor="name" className="text-gray-600">
            Your name *
          </label>{" "}
          <br />
          <input
            value={form.name}
            name="name"
            required
            type="text"
            placeholder="John Doe"
            className="border-2  rounded-lg text-black  w-full  p-2"
            onChange={(e) => inputHandler(e)}
          />
        </div>
        <div className="md:w-1/2">
          <label htmlFor="email" className="text-gray-600 w-full p-2">
            Contact email *
          </label>{" "}
          <br />
          <input
            onChange={(e) => inputHandler(e)}
            value={form.email}
            name="email"
            required
            type="email"
            placeholder="you@example.com"
            className="border-2  rounded-lg text-black  w-full p-2"
          />
        </div>
      </div>
      <div className="md:flex md:space-x-4">
        <div className="md:w-1/2">
          <label htmlFor="company" className="text-gray-600">
            Company name *
          </label>{" "}
          <br />
          <input
            onChange={(e) => inputHandler(e)}
            value={form.company}
            name="company"
            required
            type="text"
            placeholder="Company name"
            className="border-2  rounded-lg text-black  w-full p-2 "
          />
        </div>
        <div className="md:w-1/2">
          <label htmlFor="phone" className="text-gray-600">
            Phone number *
          </label>{" "}
          <br />
          <input
            onChange={(e) => inputHandler(e)}
            value={form.phone}
            name="phone"
            required
            type="phone"
            placeholder="Phone number"
            className="border-2  rounded-lg text-black w-full p-2"
          />
        </div>
      </div>
      <div className="md:w-full">
        <label htmlFor="company" className="text-gray-600">
          Your message *
        </label>{" "}
        <br />
        <textarea
          onChange={(e) => inputHandler(e)}
          value={form.message}
          name="message"
          id="message"
          cols={23}
          rows={10}
          placeholder="Type your message...."
          required
          className=" rounded-lg border-2 p-2 w-full"
        ></textarea>
      </div>
      <div className="p-2 text-center">
        <span className="text-xs text-center">
          We will receive this email directly to our inbox, and will NOT send
          you any spam or disclose it with any third parties.
        </span>
      </div>
      <div>
        <div className="text-center">
          <button
            type="submit"
            className={` p-2 rounded-lg text-white text-center  hover:text-gray-800 ${
              res === true
                ? " bg-green-500 text-white "
                : " bg-gray-600 hover:bg-gray-200 "
            }`}
          >
            {res ? "Message Sent" : "Send Email"}
          </button>
        </div>
      </div>
    </form>
  );
};
export default ContactUsForm;

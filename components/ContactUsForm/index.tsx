const ContactUsForm = () => {
  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      action=""
      className="bg-white p-5 rounded-lg md:w-3/4"
      onSubmit={(e) => formHandler(e)}
    >
      <div className="md:flex md:space-x-4">
        <div className="md:w-1/2 ">
          <label htmlFor="name" className="text-gray-600">
            Your name *
          </label>{" "}
          <br />
          <input
            required
            type="text"
            placeholder="John Doe"
            className="border-2  rounded-lg text-black  w-full  p-2"
          />
        </div>
        <div className="md:w-1/2">
          <label htmlFor="email" className="text-gray-600 w-full p-2">
            Contact email *
          </label>{" "}
          <br />
          <input
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
          name="message"
          id="message"
          cols={23}
          rows={10}
          placeholder="Type your message...."
          required
          className=" rounded-lg border-2 p-2 w-full"
        ></textarea>
      </div>
      <div className="p-2">
        <span className="text-xs text-center">
          We will receive this email to our inbox, and will NOT send you any
          spam or disclose it with any third parties.
        </span>
      </div>
      <div>
        <div className="text-center">
          <button className="bg-gray-600 p-2 rounded-lg text-white text-center hover:bg-gray-200 hover:text-gray-800">
            Send Email
          </button>
        </div>
      </div>
    </form>
  );
};
export default ContactUsForm;

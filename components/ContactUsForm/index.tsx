import Button from "../Button";

const ContactUsForm = () => {
  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="rounded-lg w-full md:w-3/4  container mx-auto   ">
      <h1 className="text-center p-5 text-2xl "  > 👋 Say HI!</h1>
      <form
        onSubmit={(e) => formHandler(e)}
        className="rounded-lg bg-gray-100 flex flex-col gap-4 w-full p-5 md:p-20 "
      >
        <div className="flex justify-between flex-row gap-2 w-full ">
          <div className="flex flex-col w-full">
            <label htmlFor="">Your Name: </label>
            <input
              className="rounded-lg p-2"
              type="text"
              placeholder="First and Last Name"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="">Company Name: </label>
            <input className="rounded-lg p-2" type="text" placeholder="Company Name" required />
          </div>
        </div>

        <div className="flex justify-between flex-row gap-2 w-full ">
          <div className="flex flex-col w-full">
            <label htmlFor="">Contact Email: </label>
            <input className="rounded-lg p-2" type="email" placeholder="PlaceHolder@Email.com" required />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="">Contact Phone Number: </label>
            <input className="rounded-lg p-2" type="tel" placeholder="(xxx)-xxx-xxxx" required />
          </div>
        </div>

        <div className="flex justify-start flex-row gap-2 w-full  ">
          <div className="flex flex-col gap-2 w-full ">
            <label htmlFor="">Message: </label>
            <textarea
              placeholder="Please build our product!"
              className="gap-2 rounded-lg h-40 w-full p-2 "
            ></textarea>
          </div>
          
        </div>
        <Button className="text-blue-600 bg-yellow-500 border-solid border-red-500">
          SUBMIT
        </Button>
      </form>
    </div>
  );
};
export default ContactUsForm;

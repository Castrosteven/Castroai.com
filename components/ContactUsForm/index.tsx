import Button from "../Button";

const ContactUsForm = () => {
  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="p-10 rounded-lg w-1/2">
      <form onSubmit={(e) => formHandler(e)} className="bg-gray-200">
        <div>
          <label htmlFor="">First Name</label>
          <input className="" type="text" placeholder="First Name" />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input type="text" placeholder="Last Name" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="">Message</label>
          <textarea placeholder="Please build our product!"></textarea>
        </div>
        <Button>SUBMIT</Button>
      </form>
    </div>
  );
};
export default ContactUsForm;

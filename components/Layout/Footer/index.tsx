const Footer = () => {
  return (
    <footer className=" text-gray-800 p-5">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between h-full space-y-6 ">
        <div>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>Legal</li>
            <li>Carrers</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>980 6th Ave New York,NY 10018</li>
            <li>
              <a href="tel:8882754025">888-275-4025</a>
            </li>
            <li>hello@castroai.com</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>facebook</li>
            <li>instagram</li>
            <li>twitter</li>
            <li>medium</li>
          </ul>
        </div>
        <div className="  ">
          <span className="font-BroLink">castroai LLC</span> <br />
          <span className="text-xs ">&copy; 2021</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

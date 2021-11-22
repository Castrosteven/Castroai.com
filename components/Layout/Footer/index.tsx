const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-5 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between h-full space-y-6 ">
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
            <li><a href="tel:8882754025">888-275-4025</a></li>
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
          <span className="text-white font-BroLink">castroai LLC</span> <br />
          <span className="text-xs ">&copy; 2021</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

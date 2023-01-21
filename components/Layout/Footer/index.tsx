import Link from "next/link";
import { useApp } from "../../../context/AppContext";

const Footer = () => {
  const { companyInfo } = useApp();
  if (!companyInfo) {
    return null;
  }
  return (
    <footer className=" text-white bg-gray-800 p-5">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between h-full space-y-6 ">
        <div>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>Legal</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>{companyInfo.fields.address}</li>
            <li>
              <Link href={`tel:${companyInfo.fields.phoneNumber}`}>
                {companyInfo.fields.phoneNumber}
              </Link>
            </li>
            <Link href={`mailto:stevenc@castroai.com`}>
              stevenc@castroai.com
            </Link>
          </ul>
        </div>
        <div>
          <ul>
            {companyInfo &&
              companyInfo.fields.socialMediaLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <Link target={"_blank"} href={link.fields.link}>
                      {link.fields.title}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="  ">
          <span className="font-BroLink">{companyInfo.fields.name}</span> <br />
          <span className="text-xs ">&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

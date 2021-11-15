import Link from "next/link";
const SideBar = () => {
  const items = [
    { page: "Project", link: "/project", logo: "" },
    { page: "Content ", link: "/content", logo: "" },
    { page: "Legal ", link: "/legal", logo: "" },
    { page: "Payment ", link: "/payment", logo: "" },
  ];

  return (
    <div className="md:h-full md:w-1/12  bg-gray-400 md:pt-20 ">
      <ul className="flex md:flex-col flex-row md:justify-start w-full md:pt-4 md:space-y-4 ">
        {items.map((item, index) => {
          return (
            <li
              key={index}
              className="bg-white w-full p-4 hover:bg-gray-500 hover:text-white"
            >
              <Link href={item.link} passHref>
                <a>{item.page}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SideBar;

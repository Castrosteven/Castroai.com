import Link from "next/link";
const SideBar = () => {
  const items = [
    { page: "Project", link: "/project", logo: "" },
    { page: "Content ", link: "/content", logo: "" },
    { page: "Legal ", link: "/legal", logo: "" },
    { page: "Payment ", link: "/payment", logo: "" },
  ];

  return (
    <div className="h-full w-1/6 bg-gray-400 pt-20 flex flex-col items-center ">
      <ul className="h-1/4 flex flex-col justify-around w-full pt-20 space-y-4 ">
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

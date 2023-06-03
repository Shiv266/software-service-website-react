/** @format */
import WebIcon from "../../assets/images/webDev.png";

const serviceData = [
  {
    title: "Web Development",
    desc: "Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet",
    icon: WebIcon,
  },
  {
    title: "AI",
    desc: "Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet",
    icon: WebIcon,
  },
  {
    title: "App Testing",
    desc: "Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet",
    icon: WebIcon,
  },
  {
    title: "Cloud Development",
    desc: "Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet",
    icon: WebIcon,
  },
  {
    title: "DevOps",
    desc: "Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet",
    icon: WebIcon,
  },
  {
    title: "App Development",
    desc: "Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet",
    icon: WebIcon,
  },
];

export function ServiceCard() {
  return (
    <>
      <div className="grid mx-auto mt-8 sm:px-3 lg:px-16 gap-6 lg:gap-6 md:gap-4 grid-cols-1 md:grid-cols-2  xl:grid-cols-3 ">
        {serviceData.map((data, index) => (
          <div key={index} className="flex mx-auto flex-col justify-center">
            <div className="relative flex max-w-xs flex-col space-x-0 sm:space-x-4 space-y-3 rounded-xl border border-gray-100 bg-white p-3 shadow-lg md:max-w-md md:flex-row md:space-y-0">
              <div className="mx-auto   grid w-1/2 place-items-center bg-white sm:mx-0 md:w-1/4">
                <img
                  // src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  src={data.icon}
                  alt="tailwind logo"
                  className="rounded-xl"
                />
              </div>
              <div className="flex w-full flex-col space-y-2 bg-white p-2 md:w-2/3">
                <h3 className="text-center text-xl font-black text-gray-800 md:text-xl sm:md:text-start">
                  {data.title}
                </h3>
                <p className="text-center text-[12px] text-gray-500 sm:md:text-start">
                  {data.desc}
                </p>
                <button className="flex justify-center sm:md:lg:justify-start sm:md:lg:items-start text-sm  text-yellow-700">
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

import { BookmarkIcon } from "@heroicons/react/outline";

const newsArr = [
  {
    title: "How to build an ecommerce app with NestJS",
    desc: "In this tutorial, we'll explore how to build a simple NestJS ecommerce app, demonstrating many of Nest’s major features...",
  },
  {
    title: "How to build an ecommerce app with NestJS",
    desc: "In this tutorial, we'll explore how to build a simple NestJS ecommerce app, demonstrating many of Nest’s major features...",
  },
  {
    title: "How to build an ecommerce app with NestJS",
    desc: "In this tutorial, we'll explore how to build a simple NestJS ecommerce app, demonstrating many of Nest’s major features...",
  },
];

export function News() {
  return (
    <>
      <div className="mt-16">
        <h1 className="text-sm text-gray-900 sm:text-center">
          LATEST<span className="text-yellow-700 ml-2">ARTICLES</span>
        </h1>
        <h1 className="text-gray-900 font-bold text-4xl">
          Latest News And Articles
        </h1>
      </div>
      <div className="grid px-8 xl:px-24 mt-12 gap-8 sm:gap-4 grid-cols-1  sm:grid-cols-3 ">
        {newsArr.map((data, indx) => (
          <div key={indx} className="">
            <div className="w-full border border-gray-200">
              <div className="relative">
                <img
                  alt="girl texting"
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  className="h-56 opacity-90 w-full focus:outline-none"
                />
                <div className="bg-gradient-to-r inset-0 from-gray-400 to-gray-500 mix-blend-multiply absolute" />
              </div>
              <div className="bg-white">
                <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                    <BookmarkIcon className="w-5 h-5" />
                  </div>
                  <div className="rounded-full bg-yellow-200 py-1.5 px-6">
                    <p className="text-xs text-yellow-700 focus:outline-none">
                      Featured
                    </p>
                  </div>
                </div>
                <div className="p-4 mt-4">
                  <div className="flex items-center">
                    <h2 className="text-lg font-semibold focus:outline-none">
                      {data.title}
                    </h2>
                  </div>
                  <p className="mt-4 text-xs text-gray-600 focus:outline-none">
                    {data.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

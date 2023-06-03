import { ChevronRightIcon } from "@heroicons/react/solid";

export function HeroSection() {
  return (
    <>
      <main>
        <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  <button className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r bg-yellow-700 rounded-full">
                      We're hiring
                    </span>
                    <span className="ml-4 text-sm">Visit our careers page</span>
                    <ChevronRightIcon
                      className="ml-2 w-5 h-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </button>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">BEST ADVICE</span>
                    <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r bg-yellow-700 sm:pb-5">
                      FOR YOUR BUSINESS
                    </span>
                  </h1>
                  <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                      <div className="sm:flex">
                        <div className="min-w-0 flex-1 sm:mb-8 ">
                          <label htmlFor="email" className="sr-only">
                            Email address
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none"
                          />
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <button
                            type="submit"
                            className="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r bg-yellow-700 text-white font-medium focus:outline-none"
                          >
                            Start free trial
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:m-0 relative">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  <div className="relative h-56 mt-3 sm:h-72 md:absolute md:left-0 md:h-full md:w-full">
                    <img
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
                      alt=""
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-yellow-300 mix-blend-multiply"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

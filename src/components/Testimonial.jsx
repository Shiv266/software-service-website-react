const testimonial = [
  {
    name: "Leonard Krasner",
    role: "Software Engineer",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Kristin Watson",
    role: "Team Lead",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageUrl:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export function Testimonial() {
  return (
    <section className="text-gray-600 mt-16  bg-yellow-100">
      <div className="mx-auto px-5 py-16">
        <h1 className="text-sm text-gray-900 text-start">
          OUR HAPPY<span className="text-yellow-700 ml-1">CLIENTS</span>
        </h1>
        <h1 className="text-gray-900 mt-0.5  text-start font-bold text-4xl mb-12">
          What Client Saying About Us
        </h1>
        <div className="-m-4 flex flex-wrap">
          {testimonial.map((data, index) => (
            <div key={index} className="w-full p-4 md:w-1/2">
              <div className="h-full rounded bg-white border border-gray-200 shadow-md p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="mb-4 block h-5 w-5 text-gray-400"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="mb-6 leading-relaxed">{data.desc}</p>
                <div className="flex justify-start items-center">
                  <img
                    alt="testimonial"
                    src={data.imageUrl}
                    className="h-12 w-12  rounded-full object-cover"
                  />
                  <span className="flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      {data.name}
                    </span>
                    <span className="text-sm text-gray-500">{data.role}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

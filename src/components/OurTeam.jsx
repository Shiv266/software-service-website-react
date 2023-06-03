const people = [
  {
    name: "Floyd Miles",
    role: "Principal Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Emily Selman",
    role: "VP, User Experience",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Emma Dorsey",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80 ",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];

export function OurTeam() {
  return (
    <div className="bg-gray-50 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="">
            <h1 className="text-sm text-gray-900 sm:text-center">
              OUR<span className="text-yellow-700 ml-2">TEAM</span>
            </h1>
            <h1 className="text-gray-900 font-bold text-4xl">
              Meet The Expert Team
            </h1>
          </div>
          <ul className="mx-auto mt-8 sm:grid sm:grid-cols-2 gap-2 sm:gap-12 lg:grid-cols-3 lg:max-w-5xl">
            {people.map((person, index) => (
              <div
                key={index}
                className="relative shadow-lg w-full border  border-gray-200 overflow-hidden rounded-lg bg-white p-4  hover:shadow-md"
                style={{ minHeight: 160 }}
              >
                <div className="">
                  <div className="absolute top-0 right-0 z-20 mt-2 mr-2 flex flex-col justify-between p-4">
                    <div className="inline-flex w-7 h-7 bg-yellow-600 items-center justify-center rounded-full p-2 shadow-sm">
                      <svg
                        fill="currentColor"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="mt-2 w-7 h-7 bg-yellow-600 inline-flex  items-center justify-center rounded-full p-2 shadow-sm">
                      <svg
                        className="h-4 w-4 text-white"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </div>
                    <div className="mt-2 w-7 h-7 inline-flex items-center justify-center rounded-full bg-yellow-600 p-2 shadow-sm">
                      <svg
                        className="h-4 w-4 text-white"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="relative block h-full">
                    <div className="rounded-lg bg-gray-100">
                      <img className="w-full" src={person.imageUrl} alt="" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-col items-center justify-center">
                  <h2 className="line-clamp-1 mt-2 text-sm font-semibold text-gray-800">
                    {person.name}
                  </h2>
                  <p className="mt-2 text-sm text-yellow-700">{person.role}</p>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

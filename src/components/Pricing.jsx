import { CheckIcon, BriefcaseIcon } from "@heroicons/react/solid";
import basicPackage from "../assets/images/basicPackage.png";
import businessPackage from "../assets/images/businessPackage.png";

const tiers = [
  {
    name: "Basic Package",
    href: "#",
    priceMonthly: 12,
    description:
      "All the basics for starting a new business.All the basics for starting a new business",
    includedFeatures: [
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
    ],
    icon: basicPackage,
  },
  {
    name: "Standard Package",
    href: "#",
    priceMonthly: 24,
    description:
      "All the basics for starting a new business.All the basics for starting a new business",
    includedFeatures: [
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
    ],
    icon: "",
  },
  {
    name: "Business Package",
    href: "#",
    priceMonthly: 32,
    description:
      "All the basics for starting a new business.All the basics for starting a new business",
    includedFeatures: [
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
    ],
    icon: businessPackage,
  },
];

export function Pricing() {
  return (
    <>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <h1 className="text-sm text-gray-900 sm:text-center">
              PRICING<span className="text-yellow-700 ml-1">PLANS</span>
            </h1>
            <h1 className="text-4xl mt-2 font-extrabold text-gray-900 sm:text-center">
              Choose The Best Plan For
            </h1>
            <p className="text-4xl mt-1 font-extrabold text-gray-900 sm:text-center">
              Your Business
            </p>
          </div>
          <div className="mt-12 space-y-4 px-8 sm:mt-16 sm:space-y-0 md:px-0 lg:px-8 sm:grid sm:grid-cols-3 sm:gap-4 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`border ${
                  tier.name !== "Standard Package" ? "bg-white" : "bg-[#02024a]"
                } border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200`}
              >
                <div className="p-6">
                  <div className="flex justify-center">
                    {tier.name !== "Standard Package" ? (
                      <img src={tier.icon} alt="" className="w-10 h-10" />
                    ) : (
                      <BriefcaseIcon className="w-10 h-10 text-white" />
                    )}
                  </div>
                  <h2
                    className={`text-lg ${
                      tier.name !== "Standard Package"
                        ? "text-gray-900"
                        : "text-white"
                    } leading-6 font-medium mt-8`}
                  >
                    {tier.name}
                  </h2>
                  <p
                    className={`mt-4 text-sm ${
                      tier.name !== "Standard Package"
                        ? "text-gray-500"
                        : "text-white"
                    } `}
                  >
                    {tier.description}
                  </p>
                </div>
                <div
                  className={`mt-8 ${
                    tier.name !== "Standard Package"
                      ? "bg-yellow-100"
                      : "bg-white"
                  }  block w-full py-2 text-sm font-semibold text-white text-center`}
                >
                  <span className="text-4xl font-extrabold text-gray-900">
                    ${tier.priceMonthly}
                  </span>{" "}
                  <span className="text-base font-medium text-gray-500">
                    /monthly
                  </span>
                </div>
                <div className="pt-6 pb-8 px-6">
                  <h3
                    className={`text-xs font-medium ${
                      tier.name !== "Standard Package"
                        ? "text-gray-900"
                        : "text-white"
                    } tracking-wide uppercase`}
                  >
                    What's included
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {tier.includedFeatures.map((feature, index) => (
                      <li key={index} className="flex space-x-3">
                        <CheckIcon
                          className="flex-shrink-0 h-5 w-5 text-green-500"
                          aria-hidden="true"
                        />
                        <span
                          className={`text-sm ${
                            tier.name !== "Standard Package"
                              ? "text-gray-500"
                              : "text-white"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

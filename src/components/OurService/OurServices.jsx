/** @format */

import { ServiceCard } from "./ServiceCard";

export function OurServices() {
  return (
    <>
      <div className="mt-16">
        <h1 className="text-sm text-gray-900 sm:text-center">
          OUR<span className="text-yellow-700 ml-2">SERVICES</span>
        </h1>
        <h1 className="text-gray-900 font-bold text-4xl">Software Services</h1>
      </div>
      <ServiceCard />
    </>
  );
}

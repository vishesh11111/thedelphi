import Link from "next/link";
import React from "react";

const HeaderOption = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between space-x-4  items-center">
      {[
        "ROOMS & SUITES",
        "DINING & ENTERTAINMENT",
        "OFFERS",
        "EXPLORE",
        "MEETINGS & EVENTS",
        "OUR HOTEL",
        "GALLERY",
      ].map((text, index) => (
        <Link key={index} href={""}>
          <p className="relative group text-[24px] lg:text-[16px] mb-[1rem] lg:mb-0">
            {text}
            <span className="block h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
          </p>
        </Link>
      ))}
    </div>
  );
};

export default HeaderOption;

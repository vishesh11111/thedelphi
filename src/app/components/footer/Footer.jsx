"use client";
import React, { useState } from "react";
import Image from "next/image";

const data = [
  {
    id: 1,
    name: "FA2",
  },
  {
    id: 2,
    name: "Media Inquiries",
  },
  {
    id: 3,
    name: "Contact Us",
  },
  {
    id: 4,
    name: "Careers",
  },
];

const Footer = () => {
  const [state, setState] = useState({
    slideTime: false,
  });

  return (
    <div className="mt-4">
      <div className="py-10 text-white">
        <div className=" flex flex-col items-center justify-center">
          <div className={`inset-0 z-[999] bg-black delay-2s `}>
            <div className="w-[200px] h-[100px]">
              <Image
                width={100}
                height={100}
                unoptimized
                src={"/logo.svg"}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm">550 S Flower St</p>
            <p className="text-sm">Los Angeles,CA 90071</p>
            <p className="text-sm mt-4">213-892-8080</p>
          </div>
          <div className="w-full flex border-[1.5px] border-white h-[70px] mt-10">
            {data?.map((item, index) => {
              return (
                <div
                  className="w-[25%] border hover:bg-white hover:text-black text-sm sm:text-2xl italic flex items-center justify-center transition duration-500 ease-in-out transform hover:-translate-x-0 hover:scale-110"
                  key={index}
                >
                  <p>{item?.name}</p>
                </div>
              );
            })}
            <div></div>
          </div>
          <div className="w-full">
            <p className="text-center my-7 italic text-[30px] ">
              Stay in The Know
            </p>
            <div className="w-full flex justify-between h-12">
              <div className="w-[30%] h-full border-white border"></div>
              <div className="w-[30%] h-full border-white border"></div>
              <div className="w-[30%] h-full border-white border"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

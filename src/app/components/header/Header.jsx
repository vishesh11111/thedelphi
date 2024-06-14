"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderOption from "./HeaderOption";
import { usePathname, useRouter } from "next/navigation";
const Header = () => {
  const pathname = usePathname();
  const [showSideBar, setShowSideBar] = useState(false);
  const router = useRouter();

  return (
    <div className="top-0">
      <div className="w-full flex h-[109px] flex-row justify-center sm:justify-between">
        <div className="w-[50%] py-10 sm:py-0 sm:w-[20%] lg:w-[15%] h-full flex justify-center items-center">
          <div className="w-full px-5">
            <Link className="" href="/">
              <Image
                width={100}
                height={100}
                unoptimized
                src={"https://www.thedelphihotel.com/assets/svg/logo.svg"}
                className="object-cover w-full h-auto"
              />
            </Link>
          </div>
        </div>
        <div className="hidden sm:flex w-[60%]  lg:w-[73%] h-full px-5 flex-row lg:flex-col justify-around lg:justify-center items-center lg:items-end">
          <div className="flex  space-x-5 justify-end mb-1">
            <p>
              <Link className={`group uppercase duration-75`} href="/podcast">
                213-892-8080
                <span
                  className={`block h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`}
                ></span>
              </Link>
            </p>
            <p>Best Rate Guarantee</p>
          </div>
          <div
            className="flex z-[999] lg:hidden justify-between w-[90px] cursor-pointer "
            onClick={() => setShowSideBar(!showSideBar)}
          >
            <svg
              fill="none"
              height="28"
              viewBox="0 0 20 20"
              width="28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 8H20M4 16H20"
                stroke="#4A5568"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
            <h2 className="text-[20px]">MENU</h2>
          </div>
          <div className="w-full hidden lg:flex">
            <HeaderOption />
          </div>
        </div>
        <div className="hidden sm:flex sm:w-[18%] lg:w-[11%] border-x-[1.3px] border-black h-full hover:bg-black hover:text-white justify-center items-center">
          <div className="text-[1.8rem]">Reserve</div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 p-2 px-5 transition-all duration-300 ${
          showSideBar ? "opacity-100 z-[999]  w-full" : "w-0 opacity-0"
        }  bg-clip-border text-[15.5px] text-gray-500 bg-white h-[100%] flex-col space-y-1 shadow-2xl py-5 overflow-hidden`}
      >
        <div className="relative w-full h-full">
          <div className="">
            <HeaderOption />
          </div>
          <div
            className="w-[50px] h-[50px] absolute top-0 right-0 cursor-pointer"
            onClick={() => setShowSideBar(false)}
          >
            <Image
              src={"/cancelIcone.svg"}
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import Image from "next/image";

const OurLocation = () => {
  return (
    <div>
      <div className=" mb-5">
        <div className="h-[100vh] w-full absolute">
          <Image
            src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-map-64be9613eb4a4.jpg"
            alt=""
            unoptimized
            width={100}
            height={100}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative w-full h-[70vh] bg-transparent flex items-center justify-center">
          <div className="w-[95%] h-[100%]  flex justify-end items-end">
            <div className="h-[100%] w-[35%]  text-gray-600 p-6 flex flex-col justify-end">
              <div className="w-full h-auto animate-fade-up4s">
                <h2 className="italic text-lg  border-gray-300 mb-6">
                  <span className="border-b-[2px] border-gray-400">Our</span>{" "}
                  Location
                </h2>
                <div className="mb-10">
                  <h1 className="text-[40px] font-serif mb-4">
                    FLOWER STREET FAME
                  </h1>
                  <p className="mb-4">
                    Set your sights on a kaleidoscope of cultural hotspots, from
                    art galleries and acclaimed eateries to flagship stores and
                    architectural masterpieces, situated mere steps from our
                    lobby.
                  </p>
                </div>
                <a
                  href="#"
                  className="flex items-center text-gray-700 hover:underline"
                >
                  See more
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Your content */}
        <div className="relative container mx-auto bg-transparent max-w-screen-2lg  h-[90vh]">
          <div className="relative flex h-full justify-between">
            <div className="w-[40%] h-full ">
              <div className="relative  w-[83%] h-[70%] flex  justify-end ">
                <div className="relative w-[65%] h-[85%]  ">
                  <Image
                    src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-gallery-03-64be9659e12d6.webp"
                    alt=""
                    unoptimized
                    width={100}
                    height={100}
                    className="w-full animate-fade-up4s h-full object-cover transition duration-500 ease-in-out transform hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50  z-[999] transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100 flex items-center justify-center text-white text-2xl">
                    Hovered State
                  </div>
                </div>
                <div className="absolute w-[100%] h-[100%]  flex justify-start items-end">
                  <div className=" w-[45%] h-[60%] relative">
                    <Image
                      src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-gallery-04-64be965d21267.webp"
                      alt=""
                      unoptimized
                      width={100}
                      height={100}
                      className="w-full h-full animate-fade-up4s object-cover transition duration-500 ease-in-out transform hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50  z-[999] transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100 flex items-center justify-center text-white text-2xl">
                      Hovered State
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[30%]  flex justify-end">
                <div className="relative w-[40%] h-full mt-[-20px] ">
                  <Image
                    src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-gallery-64dd387bae739.webp"
                    unoptimized
                    alt=""
                    width={100}
                    height={100}
                    className="w-full h-full animate-fade-up4s object-cover transition duration-500 ease-in-out transform hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50  z-[999] transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100 flex items-center justify-center text-white text-2xl">
                    Hovered State
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[42%] pt-10 h-full bg-transparent">
              <div className="relative h-full w-full  flex justify-center">
                <div className="relative h-[90%] w-[60%]">
                  <Image
                    src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-gallery-2-64dd3859bcc6e.webp"
                    alt=""
                    unoptimized
                    width={100}
                    height={100}
                    className="w-full h-full animate-fade-up4s object-cover transition duration-500 ease-in-out transform hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50  z-[999] transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100 flex items-center justify-center text-white text-2xl">
                    Hovered State
                  </div>
                </div>
                <div className="absolute   w-full h-full flex items-end">
                  <div className="relative w-[30%] h-[40%] bg-black">
                    <Image
                      src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-gallery-05-64be965f97bec.webp"
                      unoptimized
                      alt=""
                      width={100}
                      height={100}
                      className="w-full h-full animate-fade-up4s object-cover transition duration-500 ease-in-out transform hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50  z-[999] transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100 flex items-center justify-center text-white text-2xl">
                      Hovered State
                    </div>
                  </div>
                </div>
                <div className="absolute w-full h-full flex justify-end items-center">
                  <div className="relative w-[30%] h-[40%] bg-black">
                    <Image
                      src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-gallery-01-64be96552fd38.webp"
                      unoptimized
                      alt=""
                      width={100}
                      height={100}
                      className="w-full h-full animate-fade-up4s object-cover transition duration-500 ease-in-out transform hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50  z-[999] transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100 flex items-center justify-center text-white text-2xl">
                      Hovered State
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-transparent h-full w-full animate-fade-up4s">
              <div className="flex flex-col items-center h-full">
                <div className="text-[80px] font-serif text-gray-800 text-center">
                  <span className="block">SCENES</span>
                  <span className="block">From</span>
                  <span className="block">The City</span>
                </div>
                <h1 className=" mb-4"> </h1>
                <a
                  href="#"
                  className="text-blue-500 text-xl font-semibold flex items-center"
                >
                  View gallery →
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLocation;

import React from "react";
import Image from "next/image";

const HotelRoom = () => {
  return (
    <div className="bg-black py-10">
      <div className="relative w-full flex flex-col lg:flex-row bg-gray-200 min-h-screen">
        <div className="w-full">
          <Image
            src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-rooms-64be951902ebd.jpg"
            alt="Room"
            width={100}
          unoptimized

            height={100}
            className="object-cover w-full h-full min-h-screen"
          />
        </div>
        <div className="absolute z-[999] w-full h-full bg-transparent flex  justify-end items-end p-10">
          <div className="w-full sm:w-[90%] lg:w-[80%] xl:w-[50%] flex h-auto flex-col sm:flex-row border justify-center bg-white">
            <div className=" w-full sm:w-[45%] h-auto border p-2 font-serif">
              <h2 className="text-lg font-semibold text-left mb-4 text-[12px]">
                Rooms
              </h2>
              <h1 className="text-3xl font-bold text-left py-10 px-10 ">
                PEACE & QUIET
              </h1>
            </div>
            <div className="w-full sm:w-[55%] p-2 py-10">
              <p className="text-left mb-6">
                From premium amenities to personalized experiences, our 205
                spacious guest rooms and two penthouses create an environment of
                sophistication, elegance, and comfort that is The Delphi part.
              </p>
              <a
                href="#"
                className="text-left text-blue-600 hover:text-blue-800"
              >
                View all rooms →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelRoom;

// App.js
import React from "react";
import Image from "next/image";

const Event = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:h-auto">
      {/* Left Side - Image */}
      <div className="w-full sm:w-[70%] h-full bg-red-500">
        <Image
          src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-events-64be95d53df4d.jpg"
          alt="Event"
          width={100}
          unoptimized
          height={100}
          className="w-full h-full object-cover" // Changed from object-cover to object-contain
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-[100%] sm:w-[30%] h-auto sm:pt-[56px] lg:pt-[58px]  bg-green-900">
        <h1 className=" text-white text-[56px] lg:text-[95px] font-bold leading-none mb-12 font-serif ">
          EVENTS
        </h1>

        <div className="text-white  h-full  flex flex-col  items-center">
          <div className="w-[80%] lg:w-[70%]  lg:mt-[80px]">
            <h2 className="text-xl font-semibold mb-4">ORGANIZED OCCASIONS</h2>
            <p className="text-sm lg:text-lg mb-6">
              Bring together a few friends and make a few more while you're with
              us. From casual to corporate, we've got all the space and
              amenities you need, and then some.
            </p>
            <a href="#" className="text-lg text-white underline">
              Gather together →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;

// App.js
"use client";
import React, { useState } from "react";
import Image from "next/image";
import SectionTracker from "@/app/styles/custom-container/SectionTracker";
import { motion } from "framer-motion";

const Event = () => {
  const [isVisibleSection, setIsVisibleSection] = useState(false);

  const handleInViewChange = (sectionId, inView) => {
    if (sectionId === "section_07") {
      setIsVisibleSection(inView);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row h-auto mt-5">
      <SectionTracker
        sectionId="section_07"
        onInViewChange={handleInViewChange}
      />
      {/* Left Side - Image */}
      <div className="w-full sm:w-[70%] h-full">
        <div className="relative w-full h-full overflow-hidden">
          <div className=" w-full  h-full">
            <Image
              src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-events-64be95d53df4d.jpg"
              alt="Event"
              width={100}
              unoptimized
              height={100}
              className="w-full h-full object-cover" // Changed from object-cover to object-contain
            />
          </div>
          <div
            className={`absolute h-full w-full inset-0 z-[999] bg-black ${isVisibleSection && "animate-slideOutRight delay-2s"}  flex items-center justify-center`}
          >
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
        </div>
      </div>

      {/* Right Side - Text */}
      <div className="w-[100%] sm:w-[30%] h-auto  bg-green-900">
        <h1 className=" sm:mt-[-10px] lg:mt-[-20px] text-white text-[56px] lg:text-[95px] animate-fade-down4s font-bold leading-none mb-12 font-serif ">
          EVENTS
        </h1>
        <div className="text-white  h-full  flex flex-col  items-center animate-fade-up4s">
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

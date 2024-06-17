import Image from "next/image";
import React, { useEffect, useState } from "react";
import InDetails from "./InDetails";
import { motion} from "framer-motion";
import SectionTracker from "@/app/styles/custom-container/SectionTracker";

const Availability = () => {
  const [isSection01InView, setIsSection01InView] = useState(false);

  const handleInViewChange = (sectionId, inView) => {
    if (sectionId === "section_01") {
      setIsSection01InView(inView);
    }
  };

  return (
    <>
      <div className="w-full h-full rounded-sm font-lora">
        <motion.div
          className="inset-0 border border-r-1 border-black hidden sm:flex"
          initial={
            isSection01InView && {
              clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            }
          }
          animate={
            isSection01InView && {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }
          }
          transition={isSection01InView && { duration: 1.5, ease: "easeInOut" }}
        >
          <SectionTracker
            sectionId="section_01"
            onInViewChange={handleInViewChange}
          />
          <motion.div
            className="inset-0 border border-r-1 border-black w-[20%] flex justify-center items-center p-5"
            initial={
              isSection01InView && {
                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
              }
            }
            animate={
              isSection01InView && {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }
            }
            transition={
              isSection01InView && { duration: 1.5, ease: "easeInOut" }
            }
          >
            CHECK IN
          </motion.div>
          <motion.div
            initial={
              isSection01InView && {
                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
              }
            }
            animate={
              isSection01InView && {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }
            }
            transition={
              isSection01InView && { duration: 1.5, ease: "easeInOut" }
            }
            className="inset-0 border border-r-1 border-black w-[20%] flex justify-center items-center p-5"
          >
            CHECK OUT
          </motion.div>
          <motion.div
            initial={
              isSection01InView && {
                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
              }
            }
            animate={
              isSection01InView && {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }
            }
            transition={
              isSection01InView && { duration: 1.5, ease: "easeInOut" }
            }
            className="inset-0 border border-r-1 border-black text-[15px] w-[20%] flex justify-center items-center p-5"
          >
            ROOMS
            <select className="text-[20px] border-none ml-3">
              <option value="1">01</option>
              <option value="1">02</option>
              <option value="1">03</option>
              <option value="1">04</option>
            </select>
          </motion.div>
          <motion.div
            initial={
              isSection01InView && {
                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
              }
            }
            animate={
              isSection01InView && {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }
            }
            transition={
              isSection01InView && { duration: 1.5, ease: "easeInOut" }
            }
            className="inset-0 border border-r-1 border-black text-[15px] w-[20%] flex justify-center items-center p-5"
          >
            GUESTS
            <select className="text-[20px] border-none ml-3">
              <option value="1">01</option>
              <option value="1">02</option>
              <option value="1">03</option>
              <option value="1">04</option>
            </select>
          </motion.div>
          <motion.div
            className="border border-r-1 border-black w-[40%] rounded-sm text-[20px] flex justify-center items-center bg-black text-white p-5"
            initial={isSection01InView && { width: 0 }}
            animate={isSection01InView && { width: "100%" }}
            transition={isSection01InView && { duration: 1.5, delay: 0.5 }} // Adjust duration and delay as needed
          >
            Check Availability
          </motion.div>
        </motion.div>
        <motion.div
          initial={
            isSection01InView && {
              clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            }
          }
          animate={
            isSection01InView && {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }
          }
          transition={isSection01InView && { duration: 1.5, ease: "easeInOut" }}
          id="section_01"
          className="w-full  inset-0 border border-r-1 border-black flex flex-col-reverse lg:flex-row "
        >
          <motion.div
            initial={
              isSection01InView && {
                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
              }
            }
            animate={
              isSection01InView && {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }
            }
            transition={
              isSection01InView && { duration: 1.5, ease: "easeInOut" }
            }
            className={`  inset-0 border border-r-1 border-black w-[100%] lg:w-[50%] p-0 sm:p-8 flex justify-center `}
          >
            <div className="w-full h-full animate-fade-up4s  font-serif">
              <span className="text-[60px] m-0 lg:block mr-10 font-serif">THE</span>
              <span className="text-[60px] m-0 lg:block mr-10 font-serif">DELPHI</span>
              <span className="text-[60px] m-0 lg:block font-serif">LOS</span>
              <span className="text-[60px] m-0 block font-serif">ANGELES</span>
              <div className="text-[18px] mt-5">
                In Ancient Greece, Delphi was considered the center of the
                world. A few thousand years later, that essence now resides at
                550 Flower Street: a staple of downtown Los Angeles’ silhouette.
                Once the headquarters of Superior Oil, and then the focal point
                of the city’s early 2000s revitalization, our address is once
                again rewriting the script for creativity, culture, and
                hospitality.
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={isSection01InView && { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={isSection01InView && { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={isSection01InView && { duration: 1.5, ease: "easeInOut" }}
            className=" inset-0 border border-r-1 border-black  p-0 sm:p-8 w-[100%] lg:w-[50%] "
          >
            <div className="w-full h-full overflow-hidden relative">
              <Image
                src={"/landing/img4.webp"}
                width={100}
                height={100}
                unoptimized
                objectFit="cover"
                className="object-cover h-full w-full animate-fade-left"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <InDetails />
    </>
  );
};

export default Availability;

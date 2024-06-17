import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import SectionTracker from "@/app/styles/custom-container/SectionTracker";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import {
  Autoplay,
  EffectCreative,
  EffectFade,
  Navigation,
} from "swiper/modules";
import Image from "next/image";
import InDetailsCard from "./cards/InDetailsCard";

const data = [
  {
    id: 1,
    image: "/landing/img5.webp",
    title: "A CRAFT COFFEE & TEA BAR1",
    des: "n Ancient Greece, Delphi was considered the center of the world. A few thousand years later, that essence now resides at 550 Flower Street: a staple of downtown Los Angeles’ silhouette. Once the headquarters of Superior Oil,",
  },
  {
    id: 2,
    image: "/landing/img6.webp",
    title: "A CRAFT COFFEE & TEA BAR2",
    des: "n Ancient Greece, Delphi was considered the center of the world. A few thousand years later, that essence now resides at 550 Flower Street: a staple of downtown Los Angeles’ silhouette. Once the headquarters of Superior Oil,",
  },
  {
    id: 3,
    image: "/landing/img7.webp",
    title: "A CRAFT COFFEE & TEA BAR3",
    des: "n Ancient Greece, Delphi was considered the center of the world. A few thousand years later, that essence now resides at 550 Flower Street: a staple of downtown Los Angeles’ silhouette. Once the headquarters of Superior Oil,",
  },
];

const InDetails = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isVisibleSection, setisVisibleSection] = useState(false);

  const handleInViewChange = (sectionId, inView) => {
    if (sectionId === "section_02") {
      setisVisibleSection(inView);
    }
  };

  return (
    <>
      <div className="in-details">
        <motion.div
          className="inset-0 border border-r-1 border-black"
          initial={isVisibleSection && { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
          animate={isVisibleSection && { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          transition={isVisibleSection && { duration: 1.5, ease: "easeInOut" }}
        >
          <div className="relative flex flex-col lg:h-[640px] gap-12 xl:gap-0 lg:flex-row justify-between  ">
            <div className="w-[100%] lg:w-[19%]  xl:w-[29%] flex justify-center items-center ">
              <div className={`${isVisibleSection && "animate-fade-up4s"}`}>
                <span className="text-[60px] m-0 font-serif block">THE</span>
                <span className="text-[60px] m-0 font-serif block">DELPHI</span>
                <span className="text-[20px] m-0 ml-[170px] block">
                  In Details
                </span>
              </div>
            </div>
            <SectionTracker
              sectionId="section_02"
              onInViewChange={handleInViewChange}
            />
            <div className="w-[100%] lg:w-[74%] xl:w-[66%]  flex flex-col justify-center">
              <div className="w-full  flex justify-center">
                <Swiper
                  onSwiper={setSwiperInstance}
                  grabCursor={true}
                  effect={"fade"}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  speed={1300}
                  modules={[EffectFade, Autoplay, Navigation]}
                  className="mySwiper w-full"
                >
                  {data?.map((item, index) => (
                    <SwiperSlide
                      key={index}
                      className={`w-full flex justify-center items-center `}
                    >
                      <InDetailsCard item={item} index={index} isView={isVisibleSection}/>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="absolute w-full h-full bg-transparent flex justify-center items-center">
              <div className={`w-full sm:w-[70%] lg:w-[61%] xl:w-[39%] `}>
                <div
                  className={` ${
                    isVisibleSection
                      ? "border-bottom-to-top-animation4sec"
                      : "hidden "
                  } w-full border-l-[2px] h-full border-[#0000001A]`}
                >
                  {" "}
                </div>
                <div className="w-full h-auto flex flex-col items-center">
                  <div className=" flex justify-center w-full h-full">
                    <div className="h-full w-full ">
                      <Image
                        src="/randallroundtext.svg"
                        alt="img"
                        height={100}
                        unoptimized
                        width={100}
                        className="animate-spin-slow w-full h-full "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-5 items-end justify-end">
            <div
              onClick={() => swiperInstance?.slidePrev()}
              className="w-[100px] border cursor-pointer h-[70px] flex items-center justify-center"
            >
              prev
            </div>
            <div
              onClick={() => {
                swiperInstance?.slideNext();
              }}
              className="w-[100px] border cursor-pointer h-[70px] flex items-center justify-center"
            >
              next
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default InDetails;

"use client";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import { Autoplay, EffectCreative } from "swiper/modules";
import Image from "next/image";

const Slider = ({ slides }) => {
  const [state, setState] = useState({
    slideTime: false,
  });

  useEffect(() => {
    setTimeout(() => {
      setState((pre) => ({ ...pre, slideTime: true }));
    }, 100);
  }, []);

  return (
    <>
      <div className="relative w-full h-[40rem] opacity-90 overflow-hidden">
        <Swiper
          grabCursor={true}
          effect={"creative"}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={1300}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative, Autoplay]}
          className="mySwiper w-full h-full"
        >
          {slides?.map((item, index) => (
            <SwiperSlide key={index} className={`w-full h-full`}>
              <Image
                src={item?.image}
                unoptimized
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 top-[70%] left-[5%] flex  items-start  z-[999] font-serif">
          <div className="py-2">
            <span className="text-[25px] lg:text-[35px]  text-white uppercase tracking-wider ml-10 m-0">
              The New{" "}
            </span>
            <br />
            <span className="text-[50px] lg:text-[60px] text-white uppercase tracking-wider m-0">
              Center of L.A. Culture
            </span>
          </div>
        </div>
        <div
          className={`absolute inset-0 z-[999] bg-black ${
            state?.slideTime ? "animate-slideOutRight " : "animate-slideInDown "
          } delay-2s  flex items-center justify-center`}
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
    </>
  );
};

export default Slider;

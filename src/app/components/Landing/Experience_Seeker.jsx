import React, { useState } from "react";
import ExperienceCard from "./cards/ExperienceCard";
import "swiper/css";
import "swiper/css/effect-creative";
import {
  Autoplay,
  EffectCreative,
  EffectFade,
  Navigation,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import SectionTracker from "@/app/styles/custom-container/SectionTracker";

const data = [
  {
    id: 1,
    title: "Wish I Could Give 10 Stars",
    des: "Everything was great from the spacious rooms to the meeting space and food and beverage. The customer service was refreshing too! Highly recommend this hotel for business or leisure travel.",
  },
  {
    id: 2,
    title: "A Gem in Downtown ",
    des: "Everything was great from the spacious rooms to the meeting space and food and beverage. The customer service was refreshing too! Highly recommend this hotel for business or leisure travel.",
  },
  {
    id: 2,
    title: "Excellent Stay!",
    des: "Everything was great from the spacious rooms to the meeting space and food and beverage. The customer service was refreshing too! Highly recommend this hotel for business or leisure travel.",
  },
];

const Experience_Seeker = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isVisibleSection, setIsVisibleSection] = useState(false);

  
  const handleInViewChange = (sectionId, inView) => {
    if (sectionId === "section_06") {
      setIsVisibleSection(inView);
    }
  };

  return (
    <motion.div
      className="border-[2px] border-black"
      initial={
        isVisibleSection && {
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        }
      }
      animate={
        isVisibleSection && {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }
      }
      transition={isVisibleSection && { duration: 1.5, ease: "easeInOut" }}
    >
       <SectionTracker
            sectionId="section_06"
            onInViewChange={handleInViewChange}
          />
      <div className="w-[90%] lg:w-[70%] m-auto py-10 lg:py-24">
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
              {/* <InDetailsCard item={item} index={index} isView={isVisibleSection}/> */}
              <ExperienceCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex items-end justify-end">
        <div
          onClick={() => swiperInstance?.slidePrev()}
          className="w-[100px] border border-black cursor-pointer h-[70px] flex items-center justify-center"
        >
          ←
        </div>
        <div
          onClick={() => {
            swiperInstance?.slideNext();
          }}
          className="w-[100px] border border-black cursor-pointer h-[70px] flex items-center justify-center"
        >
          →
        </div>
      </div>
    </motion.div>
  );
};

export default Experience_Seeker;

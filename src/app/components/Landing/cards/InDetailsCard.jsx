import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const InDetailsCard = ({ item, index }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:gap-24">
      <div key={index} className="flex  w-full xl:w-[50%] justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="relative h-[300px] w-[300px] sm:h-[440px] sm:w-[440px] z-[999]"
        >
          <Image
            src={item?.image}
            width={100}
            height={100}
            unoptimized
            className="h-full w-full object-cover rounded-full"
          />
        </motion.div>
      </div>
      <div className="w-full animate-fade-up4s lg:w-[70%] flex flex-col h-[250px] lg:h-auto justify-center items-center text-black">
        <p className="text-[30px] font-serif self-end lg:self-center lg:text-left lg:ml-0 ">
          {index < 9 ? `0${index + 1}` : index + 1}
        </p>
        <div className=" text-center lg:text-left ">
          <h1 className="text-[25px] font-serif mb-5">{item?.title}</h1>
          <p className="text-[12px] font-semibold">{item?.des}</p>
        </div>
      </div>
    </div>
  );
};

export default InDetailsCard;

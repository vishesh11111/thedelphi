import React from "react";

const ExperienceCard = ({item}) => {
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-[40px] font-[600]  italic text-gray-600">
            Experience Seekers Speak
          </h2>
          <div className="relative">
            <div
              className="absolute inset-0 bg-gray-200 opacity-25 rounded-lg"
              // style={{ transform: "rotate(-2deg)" }}
            ></div>
            <div className="relative overflow-hidden bg-white rounded-lg p-8">
              <h3 className="text-[25px] font-serif font-[400] uppercase tracking-widest text-gray-500">
                {item?.title}
              </h3>
              <div className=" m-auto">

              <blockquote className="mt-4 text-lg font-light text-gray-400">
                &ldquo;{item?.des}.&rdquo;
              </blockquote>
              <footer className="mt-4 text-md font-semibold text-gray-600">
                &mdash; Shama
              </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

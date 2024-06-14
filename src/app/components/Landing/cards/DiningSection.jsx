import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const DiningSection = () => {
  return (
    <div className="relative bg-black text-white py-12 lg:py-24">
      <div className="relative z-10  mx-auto ">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full lg:w-[100%] flex justify-center lg:justify-center z-[999] ">
            <div className="relative w-[560px] h-[560px] ">
              <motion.div
                className="h-full w-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <Image
                  src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/thedelphidowntownla-homepage-dining-image-03-650e00b0beeed.png"
                  alt="Dining"
                  width={100}
                  unoptimized
                  height={100}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 font-serif flex items-center justify-center text-[170px] lg:text-[300px] font-bold italic text-white opacity-80 ">
                <figcaption
                  className="dining-section__dining z-[999] animate-fade-up4s "
                  data-one="dining"
                >
                  <motion.div
                    className="dining-section__dining--li text-gray-500"
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.span className="letter1 animate-fade-up text-black top outline-black fade-in top visible">
                      D
                    </motion.span>
                    <motion.span
                      className="letter1 animate-fade-up top text-black outline-black visible fade-in"
                      initial={{ x: 0 }}
                      animate={{
                        x: [-50, 0, 50, 0],
                        transition: { repeat: Infinity, duration: 3 },
                      }}
                    >
                      I
                    </motion.span>
                    <motion.span
                      className="animate-fade-up text-transparent top visible fade-in"
                      initial={{ x: 0 }}
                      animate={{
                        x: [-50, 0, 50, 0],
                        transition: { repeat: Infinity, duration: 3 },
                      }}
                    >
                      N
                    </motion.span>
                    <motion.span
                      className="animate-fade-up text-transparent  top visible outline-white fade-in"
                      initial={{ x: 0 }}
                      animate={{
                        x: [-50, 0, 50, 0],
                        transition: { repeat: Infinity, duration: 3 },
                      }}
                    >
                      I
                    </motion.span>
                    <motion.span
                      className="letter2 animate-fade-up top text-transparent outline-white visible fade-in"
                      initial={{ x: 0 }}
                      animate={{
                        x: [-50, 0, 50, 0],
                        transition: { repeat: Infinity, duration: 3 },
                      }}
                    >
                      N
                    </motion.span>
                    <motion.span
                      className="animate-fade-up top visible text-black outline-white fade-in"
                      initial={{ x: 0 }}
                      animate={{
                        x: [-50, 0, 50, 0],
                        transition: { repeat: Infinity, duration: 3 },
                      }}
                    >
                      G
                    </motion.span>
                  </motion.div>
                </figcaption>
              </div>
            </div>
          </div>
          <div className="absolute w-full lg:w-[30%] pl-16 top-[80%] text-black left-0 z-[999]">
            <h2 className="uppercase text-lg lg:text-xl mb-4 font-serif animate-fade-up4s">
              Intrigue the Appetite
            </h2>
            <p className="text-base lg:text-lg mb-6 fade-down animate-fade-up4s">
              Let your palate decide what's on the table – classic American
              dishes, Japanese omakase creations, or some light bites to get
              started.
            </p>
            <a
              href="#"
              className="inline-block bg-white text-black py-2 px-4 rounded-lg shadow transition duration-300"
              onMouseOver={() =>
                (document.getElementById("arrow").style.opacity = "1")
              }
              onMouseOut={() =>
                (document.getElementById("arrow").style.opacity = "0")
              }
            >
              Let's eat{" "}
              <span id="arrow" style={{ opacity: "0" }}>
                →
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full top-[50%] h-[60%] absolute bg-white z-0"></div>
    </div>
  );
};

export default DiningSection;

//   <section class="dining-section">
// <article class="dining-section__container wrapper animate-fade visible fade-in">
//   <figure class="dining-section__imagen">
//     <Image src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/thedelphidowntownla-homepage-dining-image-03-650e00b0beeed.png" alt="a plate with a slice of pizza on it" class="animate-fade circle visible fade-in" loading="lazy">
//     <figcaption class="dining-section__dining" data-one="dining">
//       <div class="dining-section__dining--li">
//         <span class="animate-fade top visible fade-in">d</span>
//         <span class="letter1 animate-fade top visible fade-in">i</span>
//         <span class="animate-fade top visible fade-in">n</span>
//         <span class="animate-fade top visible fade-in">i</span>
//         <span class="letter2 animate-fade top visible fade-in">n</span>
//         <span class="animate-fade top visible fade-in">g</span>
//       </div>
//     </figcaption>
//   </figure>
//   <div class="dining-section__content">
//             <h2 class="dining-section__title h3 animate-fade top visible fade-in">Intrigue the Appetite </h2>
//           <div class="dining-section__txt animate-fade top visible fade-in">
//       <p>Let your palate decide what’s on the table—classic American diner fare, Japanese-omakase creations, or some light bites to get started.</p>      </div>
//             <div class="dining-section__cta animate-fade top visible fade-in">
//         <a href="https://www.thedelphihotel.com/downtown-la-restaurants" class="btn" aria-label="Learn more about Intrigue the Appetite " previewlistener="true">Let's eat</a>
//       </div>
//         </div>
// </article>
// </section>

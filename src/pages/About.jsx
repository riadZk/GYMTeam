import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import imageSlideSalle from "../../assets/gym.jpg";
import imageSlideSalle2 from "../../assets/gym2.jpg";
import imageSlideSalle3 from "../../assets/gym3.png";
import imageSlideSalle4 from "../../assets/gym4.jpg";

import trsnPhy1 from "../../assets/trsnPhy1.png"
import trsnPhy2 from "../../assets/trsnPhy2.avif"
import trsnPhy3 from "../../assets/trsnPhy3.png"

import valid from "../../assets/valid2.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";


const About = () => {
    const imagesSlide = [
        imageSlideSalle,
        imageSlideSalle2,
        imageSlideSalle3,
        imageSlideSalle4,
      ];
  return (
    <div className="h-auto w-full bg-dark text-light px-6">
          <div className="relative mb-16">
            <h1 className="text-4xl md:text-6xl font-bold pt-2">About Us</h1>
            <h1 className="fit program">About</h1>
          </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="About">
          <div className="flex justify-center h-full items-center font-[500] text-[14px]  flex-col gap-5 text-para">
            <p>
              Gym24 is a leading fitness center located near Grushevka metro
              station, offering over 1500 sq. m of space dedicated to
              top-of-the-line workout equipment from leading brands such as
              Hammer Strength, Life Fitness, and TechnoGym.
            </p>

            <p>
              With affordable membership options, Gym24 is accessible to
              everyone who wants to reach their fitness goals, whether it's
              building strength, increasing endurance, or losing weight
            </p>

            <p>
              Certified trainers at Gym24 provide expert guidance and support to
              develop personalized workout plans tailored to each individual's
              needs and goals.
            </p>
          </div>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {imagesSlide.map((el,index) => (
            <SwiperSlide key={index}>
              <img src={el} className="imgeSlide" alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-between md:flex-row flex-col-reverse py-10">
            <div className="flex justify-between gap-4 p-5 w-full">
              <div className="flex justify-between items-center w-2/3 ">
                 <img src={trsnPhy2} className="rounded-md" alt=""/>
              </div>              
               <div className="flex flex-col gap-4 w-1/3">
                 <img src={trsnPhy1} alt=""/>
                 <img src={trsnPhy3} alt=""/>
              </div>
            </div>
            <div className="flex flex-col justify-center p-10 w-full">
              <h1 className="text-4xl font-bold ">
              Transform your physique with our  fitness plan.
              </h1>
              <ul className="space-y-1 list-inside text-[#E1E1E1] mt-4">
                  <li className="flex gap-1">
                    <img src={valid} alt="" className="pt-1 w-5" />
                    <span>Increase Muscle and Strength</span>
                  </li>
                  <li className="flex gap-1">
                    <img src={valid} alt="" className="pt-1 w-5" />
                    <span>Be Healthier than before</span>
                  </li>
                  <li className="flex gap-1">
                    <img src={valid} alt="" className="pt-1 w-5" />
                    <span>Increase Stamina</span>
                  </li>
              </ul>
              <div className="mt-10 flex gap-5">
                <button className="bg-link text-ligh font-bold rounded-md h-8 px-5">
                Join now
                </button>
                <button className="bg-light shadow-para shadow text-dark font-bold rounded-md h-8 px-5">
                Contact us
                </button>
              </div>
            </div>
      </div>
    </div>
  )
}

export default About;
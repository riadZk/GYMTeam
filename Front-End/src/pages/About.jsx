import React from "react";
import { FitnessPlanSection } from "../components/program/FitnessPlanSection";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import imageSlideSalle from "../assets/gym.jpg";
import imageSlideSalle2 from "../assets/gym2.jpg";
import imageSlideSalle3 from "../assets/gym3.png";
import imageSlideSalle4 from "../assets/gym4.jpg";


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
    <div className="h-auto w-full bg-dark text-light px-6" id="about">
      <div className="relative mb-16"
        data-aos="fade-right"
        data-aos-duration="1500">
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
          {imagesSlide.map((el, index) => (
            <SwiperSlide key={index}>
              <img src={el} className="imgeSlide" alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <FitnessPlanSection />
    </div>
  )
}

export default About;
import React from "react";
import Etoile from "../../assets/etoils.svg";
import Ellipse from "../../assets/Ellipse.png";
import Ellipse2 from "../../assets/etoile2.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export const Member = () => {
  return (
    <div className="h-screen w-full p-6">
      <div className="relative my-10">
        <h1 className="text-4xl font-bold pt-2">
          What Our Member <br /> Say About Us ?
        </h1>
        <p className="fit program ">Testimonial</p>
      </div>
      <div className="flex justify-center">
        <div className="md:w-[600px] w-80">
          <Swiper
            spaceBetween={30}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="SwiperMember"
          >
            <SwiperSlide>
              <div className="flex bg-dark">
                <div className=" bg-sliderBg rounded-lg">
                  <div className="flex flex-col gap-5 p-10">
                    <div className="flex justify-end">
                      <img src={Etoile} width={"100px"} alt=""></img>
                    </div>
                    <p className="text-para text-[15px]">
                      “ Join this fitness member, the best choice that I’ve.
                      They’re very professional and give you suggestion about
                      what food and nutrition that you can eat”
                    </p>
                    <div className="flex gap-2 items-center">
                      <img src={Ellipse} width={"50px"} alt=""></img>
                      <div>
                        <h1 className="text-[15px] font-bold text-light">
                          Jonathan Edward
                        </h1>
                        <p className="text-[14px] text-para">Office Worker</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex bg-dark">
                <div className=" bg-sliderBg rounded-lg">
                  <div className="flex flex-col gap-5 p-10">
                    <div className="flex justify-end">
                      <img src={Etoile} width={"100px"} alt=""></img>
                    </div>
                    <p className="text-para text-[15px]">
                      “ Join this fitness member, the best choice that I’ve.
                      They’re very professional and give you suggestion about
                      what food and nutrition that you can eat”
                    </p>
                    <div className="flex gap-2 items-center">
                      <img src={Ellipse} width={"50px"} alt=""></img>
                      <div>
                        <h1 className="text-[15px] font-bold text-light">
                          Jonathan Edward
                        </h1>
                        <p className="text-[14px] text-para">Office Worker</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

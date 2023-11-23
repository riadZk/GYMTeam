import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import coach1 from '../../assets/coach1.webp'
const Coaches = () => {
  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full h-screen bg-dark text-light p-6">
      <div className="relative mb-3">
        <h1 className="text-4xl md:text-6xl font-bold pt-2">
          Our Best Coaches
        </h1>
        <h1 className="fit program">Coaches</h1>
      </div>
      <div className="p-6">
        <Slider {...settings}>
            <div className="flex flex-col gap-5">
                <div className="h-[80%]">
                    <img src={coach1} className="" alt="" />
                </div>
                <div className="h-[20%]">
                    <h3 className="text-light font-bold text-xl">Jane Cooper</h3>
                    <p>Crossfit Coach</p>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="h-[80%]">
                    <img src={coach1} className="" alt="" />
                </div>
                <div className="h-[20%]">
                    <h3 className="text-light font-bold text-xl">Jane Cooper</h3>
                    <p>Crossfit Coach</p>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="h-[80%]">
                    <img src={coach1} className="" alt="" />
                </div>
                <div className="h-[20%]">
                    <h3 className="text-light font-bold text-xl">Jane Cooper</h3>
                    <p>Crossfit Coach</p>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="h-[80%]">
                    <img src={coach1} className="" alt="" />
                </div>
                <div className="h-[20%]">
                    <h3 className="text-light font-bold text-xl">Jane Cooper</h3>
                    <p>Crossfit Coach</p>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="h-[80%]">
                    <img src={coach1} className="" alt="" />
                </div>
                <div className="h-[20%]">
                    <h3 className="text-light font-bold text-xl">Jane Cooper</h3>
                    <p>Crossfit Coach</p>
                </div>
            </div>
        </Slider>
      </div>
    </div>
  );
};

export default Coaches;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import coach1 from "../assets/coach1.webp";
import coach2 from "../assets/coach2.jpg";
import coach3 from "../assets/coach3.avif";
import coach4 from "../assets/coach4.jpg";

import { LuMoveRight } from "react-icons/lu";
import { Member } from "../components/members/Member";

const Coaches = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className:"mySlider",
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
  const coaches = [
    {
      image: coach1,
      name: "Jane Cooper",
      role: "Crossfit Coach",
    },
    {
      image: coach2,
      name: "Brooklyn Simmons",
      role: "Crossfit Coach",
    },
    {
      image: coach3,
      name: "Savannah Nguyen",
      role: "Crossfit Coach",
    },
    {
      image: coach4,
      name: "Kathryn Murphy",
      role: "Crossfit Coach",
    },
    {
      image: coach4,
      name: "Kathryn Murphy",
      role: "Crossfit Coach",
    },
  ];
  return (
    <div className="w-full h-auto bg-dark text-light p-6">
      <div className="relative mb-3">
        <h1 className="text-4xl md:text-5xl font-bold pt-2">
          Our Best Coaches
        </h1>
        <p className="fit program">Coaches</p>
      </div>
      <div className="p-6">
        <Slider {...settings} >
          {coaches.map((c, i) => (
            <div key={i} className="flex justify-center items-center">
              <div className="h-[80%] mb-3">
                <img src={c.image} className="rounded-lg h-48 w-full" alt="" />
              </div>
              <div className="h-[20%]">
                <div className="mb-3">
                  <h3 className="text-light font-bold text-xl">{c.name}</h3>
                  <p className="text-gray-400">{c.role}</p>
                </div>
                <div className="flex justify-between">
                  <p>More info</p>
                  <button>
                   <LuMoveRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Member />
    </div>
  );
};

export default Coaches;

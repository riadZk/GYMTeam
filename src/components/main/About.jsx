import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon1 from '../../assets/cardio.svg'
import icon2 from '../../assets/fatLose.svg'
import icon3 from '../../assets/muscale.svg'
import icon4 from '../../assets/nutritions.svg'

const About = () => {
  const [centerSlideIndex, setCenterSlideIndex] = useState(0);
  
  const settings = {
    dots: true,
    centerMode:true,
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
    beforeChange: (currentSlide) => {
      setCenterSlideIndex(currentSlide);
    },
  };

  const getSlideClassName = (index) => {
    return index === centerSlideIndex ? "center-slide" : "";
  };
  const data = [
    {
      icon: icon1, 
      title: "Cardio Strength",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
      class: getSlideClassName(0),
    },
    {
      icon: icon2, 
      title: "Cardio Strength",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
      class: getSlideClassName(1),
    },
    {
      icon: icon3, 
      title: "Cardio Strength",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
      class: getSlideClassName(2)
    },
    {
      icon: icon4, 
      title: "Cardio Strength",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
      class: getSlideClassName(3),
    },
  ];
  return (
    <div className="w-full h-screen bg-dark text-textNormal px-10 pt-20">
      <div className="relative">
        <h1 className="font-bold text-[40px]"> Explore Our Program</h1>
        <p className="fit program">Program</p>
      </div>
      <div>
        <Slider {...settings}>
        {
          data.map((item,index) =>
            <div key={index} className={`bg-sliderBg ${item.class} flex flex-col px-[24px] py-5 mt-10 text-light rounded-lg`}>
            <div className="icon_slider mb-3">
              <span><img src={item.icon} width={"30px"} height={"30px"} alt="not found" /></span>
            </div>
            <h1 className="text-light font-bold text-lg">{item.title}</h1>
            <p className="text-para text-sm">{item.para}</p>
          </div>
          )
        }
        </Slider>
      </div>
    </div>
  );
};

export default About;

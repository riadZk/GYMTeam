import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon1 from '../../assets/cardio.svg'
import icon2 from '../../assets/fatLose.svg'
import icon3 from '../../assets/muscale.svg'
import icon4 from '../../assets/nutritions.svg'
const About = () => {
  let settings = {
    dots: true,
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
          initialSlide: 2,
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
    <div className="w-full h-screen bg-dark text-textNormal px-10 pt-20">
      <div className="relative">
        <h1 className="font-bold text-[40px]"> Explore Our Program</h1>
        <p className="fit program">Program</p>
      </div>
      <div>
        <Slider {...settings}>
          <div className="bg-sliderBg flex flex-col px-[24px] py-5 text-light rounded-lg ">
            <div className=".icon_slider mb-3">
              <span><img src={icon1} width={"30px"} height={"30px"} alt="not found" /></span>
            </div>
            <h1 className="text-light font-bold text-lg">Cardio Strength</h1>
            <p className="text-para text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.</p>
          </div>
          <div className="bg-sliderBg flex flex-col px-[24px] py-5 text-light rounded-lg ">
            <div className=".icon_slider mb-3">
              <span><img src={icon2} width={"30px"} height={"30px"} alt="not found" /></span>
            </div>
            <h1 className="text-light font-bold text-lg">Fat Lose</h1>
            <p className="text-para text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.</p>
          </div>
          <div className="bg-sliderBg flex flex-col px-[24px] py-5 text-light rounded-lg ">
            <div className=".icon_slider mb-3">
              <span><img src={icon3} width={"30px"} height={"30px"} alt="not found" /></span>
            </div>
            <h1 className="text-light font-bold text-lg">Muscle Gain</h1>
            <p className="text-para text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.</p>
          </div>
          <div className="bg-sliderBg flex flex-col px-[24px] py-5 text-light rounded-lg ">
            <div className=".icon_slider mb-3">
              <span><img src={icon4} width={"30px"} height={"30px"} alt="not found" /></span>
            </div>
            <h1 className="text-light font-bold text-lg">Nutritions</h1>
            <p className="text-para text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.</p>
          </div>
          {/* <div className="bg-sliderBg flex flex-col px-[24px] py-5 text-light rounded-lg ">
            <div className=".icon_slider mb-3">
              <span><img src={icon1} width={"30px"} height={"30px"} alt="not found" /></span>
            </div>
            <h1 className="text-light font-bold text-lg">Cardio Strength</h1>
            <p className="text-para text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.</p>
          </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default About;

import React from "react";

const Classes = () => {
  return (
    <div className="w-full h-auto text-light bg-dark">
      <div className="contactPage w-full h-[70vh]">
        <div className="flex justify-center h-full items-center">
          <h2 className="font-[400]  text-4xl">Classes Page</h2>
        </div>
      </div>
      <div className="w-full h-auto">
        <div className="flex justify-between p-6">
          <div className="w-2/3">
            <h1 className="text-2xl font-bold p-7">GROUP FITNESS CLASSES</h1>
            <h4 className="font-[400] text-4xl mb-3">Our Best Classes. Your Best Results!</h4>
            <p className="text-para w-4/5 text-center text-[15px]">
              Led by awe-inspiring instructors who are certified masters of
              their crafts, World Gym group fitness classes are designed for
              maximum results – and maximum fun! Looking for new ways to stay
              fit? We’ve got you covered with all your favorites, including
              Cycling, Zumba®, HIIT, Yoga, Les Mills™ and more! Whether you’re
              just starting out on your fitness journey, or are a conditioned
              fitness enthusiast, our group fitness classes make it easy to stay
              consistent and reach your goals, all while being a part of an
              inclusive and supportive community.
            </p>
          </div>
          <div className="classesFilter bg-sliderBg text-white py-10 w-1/3  rounded-[1px]">
            <h1 className="text-2xl font-bold pl-7">Classes</h1>
            <ul className="pl-10">
              <li className="font-bold text-xl  hover:text-link">
                <a href="#/">Fitness</a>
              </li>
              <li className="font-bold text-xl hover:text-link">
                <a href="#/">Yoga</a>
              </li>
              <li className="font-bold text-xl hover:text-link">
                <a href="#/">Cycling</a>
              </li>
              <li className="font-bold text-xl hover:text-link">
                <a href="#/">Zumba</a>
              </li>
              <li className="font-bold text-xl hover:text-link">
                <a href="#/">HiiT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;

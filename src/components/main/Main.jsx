import React from "react";
// import image from "../../assets/mainS.svg";
import { FaPlay } from "react-icons/fa6";
const Main = () => {
  return (
    <div className="h-screen w-full text-light Unleash pt-10">
      <div
        className="h-screen w-full"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      >
          <div className="flex flex-col justify-center items-start p-7 h-screen w-full md:w-1/2">
            <h1 className="font-bold text-4xl md:text-6xl mb-3">
              Helps for your ideal body fitness
            </h1>
            <p className="text-para mb-3">
              Motivate users with benefits and positive reinforcement, and offer
              modifications and progress tracking.
            </p>
            <div className="flex md:flex-row flex-col mt-3 w-full gap-2">
              <button className="py-2 w-52 rounded-lg font-bold bg-link">
                Start Training
              </button>
              <button className="flex w-52 items-center gap-2">
                <span className="w-9 h-9 border flex justify-center items-center border-para rounded-[50%]">
                  <FaPlay color="#097FD9" />
                </span>
                Watch Demo
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Main;

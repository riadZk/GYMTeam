import React from "react";
// import image from "../../assets/mainS.svg";
import About from "./About";
import { Pricing } from "./Pricing";
import Coaches from "./Coaches";
import Program from "../components/program/Program";

const Main = () => {
  return (
    <div className="h-auto w-full text-light" >
      <div
        className="h-screen w-full Unleash"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      >
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="flex flex-col justify-center items-start p-7 h-screen w-full md:w-1/2">
          <h1 className="font-bold text-4xl md:text-6xl mb-3">
            Helps for your ideal body fitness
          </h1>
          <p className="text-para mb-3">
            Motivate users with benefits and positive reinforcement, and offer
            modifications and progress tracking.
          </p>
          <div className="flex md:flex-row flex-col mt-3 w-full gap-2">
            <button className="py-2 w-44 rounded-lg font-bold bg-link">
              Start Training
            </button>
            <button className="flex w-52 items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_18_117"
                  style={{
                    maskType: "alpha",
                  }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_18_117)">
                  <path
                    d="M10.65 15.75L15.525 12.625C15.7583 12.475 15.875 12.2667 15.875 12C15.875 11.7333 15.7583 11.525 15.525 11.375L10.65 8.25C10.4 8.08333 10.1458 8.07083 9.8875 8.2125C9.62917 8.35417 9.5 8.575 9.5 8.875V15.125C9.5 15.425 9.62917 15.6458 9.8875 15.7875C10.1458 15.9292 10.4 15.9167 10.65 15.75ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                    fill="#097FD9"
                  />
                </g>
              </svg>
              Watch Demo
            </button>
          </div>
        </div>
      </div>
      <Program />
      <About />
      <Pricing />
      <Coaches />
    </div>
  );
};

export default Main;

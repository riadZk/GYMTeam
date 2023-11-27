import React from 'react'
import trsnPhy1 from "../../assets/trsnPhy1.png"
import trsnPhy2 from "../../assets/trsnPhy2.avif"
import trsnPhy3 from "../../assets/trsnPhy3.png"

import valid from "../../assets/valid2.svg";
import { Link } from "react-router-dom";
export const FitnessPlanSection = () => {
  return (
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
        <button className="bg-light text-dark font-bold rounded-md h-8 px-5">
        <Link to={"/contact"}>Contact us</Link>
        </button>
      </div>
    </div>
</div>
  )
}
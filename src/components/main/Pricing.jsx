import React, { useState } from "react";
import valid from "../../assets/valid.svg";
export const Pricing = () => {
  let [pricing, setPricing] = useState(false);

  const handlClick = () => {
    setPricing(!pricing);
  };
  const DataPricing = [
    {
      category: "Basic Package",
      price: 25,
      list: [
        "Unlimited Gym Access",
        "2x Fitness Consultant",
        "Nutrition Tracking",
        "1x Free Suplement",
        "3 Days per week",
        "Personal Trainer",
      ],
      bestOfre: false,
    },
    {
      category: "Mid Package",
      price: 55,
      list: [
        "Unlimited Gym Access",
        "4x Fitness Consultant",
        "Nutrition Tracking",
        "3x Free Suplement",
        "5 Days per week",
        "Personal Trainer",
      ],
      bestOfre: true,
    },
    {
      category: "Pro Package",
      price: 75,
      list: [
        "Unlimited Gym Access",
        "7x Fitness Consultant",
        "Nutrition Tracking",
        "5x Free Suplement",
        "Gym Card",
        "Personal Trainer",
      ],
      bestOfre: false,
    },
    {
      category: "Athlete Package",
      price: 105,
      list: [
        "Unlimited Gym Access",
        "Free Clothes",
        "All Training Program",
        "Free Fitness Consultant",
        "Free Suplement",
        "Gym Card",
      ],
      bestOfre: false,
    },
  ];
  return (
    <div className="h-auto w-full bg-dark text-light p-6">
      <div className="flex flex-col gap-8 justify-center items-center">
        <h1 className="font-bold text-4xl">Our List Packages</h1>
        <div className="bg-light h-auto w-auto p-2 flex gap-1 flex-col sm:flex-row justify-center rounded-lg items-center">
          <button
            onClick={handlClick}
            className={`px-6 py-3 rounded-lg font-bold ease-in duration-500 ${
              pricing ? "bg-light text-dark" : "bg-dark text-light"
            }`}
          >
            Billed Monthly
          </button>
          <button
            onClick={handlClick}
            className={` px-6 py-3 rounded-lg font-bold  ease-in duration-500 ${
              pricing ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            Billed Yearly
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 lg:grid-cols-4 my-10">
        {DataPricing.map((item,index) => (
          <div
          key={index}
            className={`Basic_Package p-3 my-3 rounded-lg w-[80%] ${
              item.bestOfre ? "bg-link transforPrice" : "bg-sliderBg"
            }`}
          >
            <p className={`${item.bestOfre ? "text-white" : "text-link"}`}>
              {item.category}
            </p>
            <p className={`${item.bestOfre ? 'block transforPricePARA bg-white w-52 pl-4 h-14':'hidden'}`}>best Offre</p>
            <p className="price pt-4 text-4xl font-bold"> ${pricing ? item.price * 11 : item.price} </p>
            <p
              className={`font-[500] text-[14px] mt-2 ${
                item.bestOfre ? "text-white" : "text-gray-400 "
              }`}
            >
              per month,bill annualy
            </p>
            <div className="my-5">
              <ul className="space-y-1 list-inside text-[#E1E1E1]">
                {item.list.map((l,i) => (
                  <li key={i} className="flex gap-1">
                    <img src={valid} alt="" className="pt-1 w-5" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={`px-6 py-[8px] rounded-lg  tex-light mt-3 ${
                !item.bestOfre ? "bg-link" : "bg-sliderBg"
              }`}
            >
              Register Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { MdClose } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

const Nav = () => {

  let [open, setopen] = useState(false);
  console.log(open)
  return (
    <div className="w-full h-20 bg-transparent fixed top-0 text-textNormal">
      <nav className="md:flex justify-center md:justify-between w-full h-full items-center p-4 md:p-8 pt-5">
        <div className="icons">
          <img src={logo} alt="icons not found" />
        </div>
        <div className={`flex flex-col md:flex-row bg-dark md:bg-transparent justify-center w-full md:w-auto gap-4 items-center right-1 md:static fixed duration-500 ease-linear z-50 ${!open ? "top-[-274px]" : "top-[70px]" }`}>
          <ul className=" gap-5 font-[600] text-[16px] flex flex-col md:flex-row">
            <li className="">
              <a
                href="/#"
                className="underline-hover hover:text-para after:bg-para"
              >
                Home
              </a>
            </li>
            <li className="">
              <a
                href="/#"
                className="underline-hover hover:text-para after:bg-para"
              >
                Pricing
              </a>
            </li>
            <li className="">
              <a
                href="/#"
                className="underline-hover hover:text-para after:bg-para"
              >
                Program
              </a>
            </li>
            <li className="">
              <a
                href="/#"
                className="underline-hover hover:text-para after:bg-para"
              >
                Community
              </a>
            </li>
          </ul>
          <div className="flex justify-center my-4 md:mt-0">
            <button className="py-2 px-5 mr-5 font-[600] rounded-lg border-[.5px] border-textNormal">
              Login
            </button>
            <button className="py-2 px-5 rounded-lg font-[600] bg-link">Register</button>
          </div>
        </div>
      </nav>
        <button
          className="md:hidden fixed right-5 cursor-pointer z-20 top-6"
          onClick={() => setopen(!open)}
        >
          {open ? <MdClose color="white" /> : <IoMdMenu color="white" />}
        </button>
    </div>
  );
};

export default Nav;
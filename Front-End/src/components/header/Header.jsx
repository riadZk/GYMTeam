import React, { useState, useRef, useEffect } from "react";
import logo from "../../assets/logo.svg";
import { MdClose } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import links from "../../data/links";
import { Link as LinkScroll } from "react-scroll";
import { Dropdown } from "../button/Dropdown";
import { Button } from "../button/Button";

const Nav = () => {
  let [open, setopen] = useState(false);

  const headerRef = useRef(null);


  const stickyHeader = () => {
    if (headerRef.current) {
      if (window.scrollY > 80) {
        headerRef.current.classList.add("header");
      } else {
        headerRef.current.classList.remove("header");
      }
    }
  };

  useEffect(() => {
    stickyHeader();
    window.addEventListener("scroll", stickyHeader);
    return () => {
      window.removeEventListener("scroll", stickyHeader);
    };
  }, []);


  return (
    <div
      className="w-full h-20 bg-transparent fixed z-50 top-0 text-textNormal wind"
      ref={headerRef}
    >
      <nav className="md:flex justify-center md:justify-between w-full h-full items-center p-4 md:p-8 pt-5">
        <div className="icons">
          <Link to="/">
            <img src={logo} alt="icons not found" />
          </Link>
        </div>
        <div
          className={`flex flex-col md:flex-row bg-dark md:bg-transparent 
          justify-center w-full md:w-auto gap-4 items-center right-1 md:static 
          fixed duration-500 ease-linear z-40 ${!open ? "top-[-400px]" : "top-[0px] py-10"
            }`}
        >
          <ul className=" gap-5 font-[600] text-[16px] flex flex-col md:flex-row">
            {links.map((link, index) => (
              <li key={index}>
                {
                  !link.router ?
                    <LinkScroll
                      to={link.path}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="underline-hover capitalize after:bg-link cursor-pointer"
                    >
                      {link.name}
                    </LinkScroll>
                    :
                    <Link
                      onClick={() => setopen(!open)}
                      to={link.path}
                      className="underline-hover capitalize after:bg-link"
                    >
                      {link.name}
                    </Link>
                }
              </li>
            ))}

          </ul>
          <div className="flex justify-center my-4 md:mt-0">
            {localStorage.getItem('authToken') ?
            <Dropdown />
              :
            <Button />
            }
          </div>
        </div>
      </nav>
      <button
        className="md:hidden fixed right-5 cursor-pointer z-50 top-6"
        onClick={() => setopen(!open)}
      >
        {open ? <MdClose color="white" /> : <IoMdMenu color="white" />}
      </button>
    </div>
  );
};

export default Nav;

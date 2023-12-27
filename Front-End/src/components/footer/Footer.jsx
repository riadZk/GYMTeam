import React from 'react'
import logo from "../../assets/logo.svg";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaRegCopyright } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Footer = () => {
  return (
    <div className='w-full  bg-dark text-light'>
      <div className='flex p-6 justify-between max-[760px]:flex-col max-[760px]:gap-[20px]'>
        <div>
          <div className='logo2 flex gap-2 items-center'>
            <img src={logo} alt='logo' className='w-10' />
            <p className='font-bold text-xl '>GYM Team</p>
          </div>
          <p className='text-para mt-5 '>
            Highlight benefits of each<br /> exercise, both physical and <br />mental
          </p>
        </div>
        <div className='flex justify-between flex-row-reverse gap-10'>
          <div>
            <p className='font-bold mb-3'>Social Media</p>
            <div className='iconMedia flex gap-2'>
              <a href='https://www.facbook.com'>
                <FaFacebookF className='text-[25px]' />
              </a>
              <a href='https://www.twitter.com'>
                <FaXTwitter className='text-[25px]' />
              </a>
              <a href='https://www.instagram.com'>
                <FaInstagram className='text-[25px]' />
              </a>
            </div>
          </div>
          <ul className='flew flex-col'>
            <li className='font-bold mb-2'>Support</li>
            <li>
              <a href='/#'>FAQ</a>
            </li>
            <li>
              <a href='/#'>Support Center</a>
            </li>
          </ul>
          <ul className='flew flex-col gap-1'>
            <li className='font-bold mb-2'>Sitemap</li>
            <li>
              <LinkScroll to='about' spy={true}
                smooth={true}
                offset={50}
                duration={500} className=' cursor-pointer'>About Us</LinkScroll>
            </li>
            <li>Promos</li>
            <li>News & Blog</li>
            <li>Help Center</li>
          </ul>
        </div>
      </div>
      <div className='w-full px-6 p-4 border-t-[1px] text-para flex justify-between border-para'>
        <p className='flex items-center gap-2'>
          <FaRegCopyright /> <span>2023 Fitness Center</span>
        </p>
        <p>
          <span>Privacy Policy</span>
          <span>Term of Use</span>
        </p>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdClose } from "react-icons/md";
import axios from "axios";
import { Page } from "../components/page/Page";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [messageRes, setMessageRes] = useState("");

  const URL = process.env.REACT_APP_URL_BASE;

  function SendMessage(e) {
    e.preventDefault();
    const data = {
      fullName: fullName,
      email: email,
      subject: subject,
      message: message,
    };
    axios
      .post(`${URL}/contact`, data)
      .then((response) => {
        setMessageRes(response.data.message);
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  }

  return (
    <div className="bg-dark text-white h-auto ">
      <Page title="Contact Page" />
      {messageRes ? (
        <div className="bg-white fixed flex justify-center items-center z-50 rounded-2xl top-10 right-2 text-green-500 w-52 h-16 font-bold">
          <p>{messageRes}</p>
          <p
            onClick={() => setMessageRes(0)}
            className="cursor-pointer absolute top-2 text-dark font-bold right-2"
          >
            <MdClose />
          </p>
        </div>
      ) : (
        <></>
      )}
      <div className="container h-auto py-10">
        <div className="md:flex justify-center p-10">
          <div
            className="flex mb-5 flex-col gap-5"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="2500"
          >
            <h2 className="font-[400] text-center text-white text-[1.5rem]">
              Talk to us
            </h2>
            <div className="flex flex-col bg-sliderBg text-light py-3 px-10 rounded-lg place-items-center ">
              <i className="ri-mail-send-fill" style={{ fontSize: "1.5rem" }}></i>
              <span className="font-bold">Email</span>
              <p className="text-lg font-[500]">riadzakaria48@gmail.com</p>
            </div>
            <div className="flex flex-col bg-sliderBg text-light py-3 px-10 rounded-lg place-items-center ">
              <MdOutlinePhoneIphone size={20} />
              <span className="font-bold">Phone</span>
              <p className="text-lg font-[500] ">06 05 33 78 23</p>
            </div>
            <div className="flex flex-col bg-sliderBg text-light py-3 px-10 rounded-lg place-items-center ">
              <i className="ri-map-pin-2-line" style={{ fontSize: "1.5rem" }}></i>
              <span className="font-bold">location</span>
              <p className="text-lg font-[500] ">Morocco Casablanca Maarif</p>
            </div>
          </div>
          <div className="w-full rounded-lg  md:w-1/2 sm:h-[450px] lg:flex justify-center px-4 lg:px-8 ">
            <form
              className="w-full"
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="2500"
              onSubmit={SendMessage}
            >
              <h2 className="font-[400] text-center text-white text-[1.5rem] mb-5 ">
                How can we help you ?
              </h2>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg text-black  border-[.2px] border-black"
                  name="user_name"
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-3 rounded-lg text-black border-[.2px] border-black"
                  name="user_email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-5 text-black">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 font-[500] rounded-lg text-black border-[.2px] border-black"
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="mb-5">
                <textarea
                  type="text"
                  name="message"
                  rows={3}
                  placeholder="Your Message"
                  className="w-full p-3 border-[.2px] text-black border-black rounded-lg"
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-2/3 p-3 rounded-lg bg-dark border border-white text-white hover:text-black ease-in duration-700 hover:bg-light text-center"
                >
                  Send Message <i class="ri-send-plane-fill"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center p-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10864.702232352553!2d-7.635104688034851!3d33.56001947096214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2b1f58fd237%3A0x83cd46008c865312!2sClub%20Moving%20Casablanca!5e0!3m2!1sen!2sma!4v1700955242060!5m2!1sen!2sma"
          width="800"
          height="400"
          style={{
            borderRadius: "20px",
          }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
export default Contact;




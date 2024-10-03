import { useState, useEffect } from "react";

import Button from "../reusable-component/Button";
// import instagram from "../assets/instagram.svg";
// import email from "../assets/email.svg";
// import tiktok from "../assets/tiktok.svg";
// import twitterX from "../assets/twitterX.svg";
import footerLogo from "../assets/footerLogo.svg";
// import useIntersectionObserver from "../Hooks/useIntersectionObserver";

import { BsFacebook } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";

const currentYear = new Date().getFullYear();

function FooterDetails() {
  const [iconSize, setIconSize] = useState(20);

  // Update icon size based on screen width
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 1024) {
        setIconSize(20); // For large screens (like laptops/desktops)
      } else if (window.innerWidth >= 768) {
        setIconSize(18); // For medium screens (like tablets)
      } else {
        setIconSize(12); // For small screens (like phones)
      }
    };

    window.addEventListener("resize", updateSize);

    // Call it initially to set the size
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // const [ref, isIntersecting] = useIntersectionObserver({
  //   threshold: 0,
  //   rootMargin: "0px 0px -250px 0px",
  // });
  return (
    <div
      // ref={ref}
      // className={` fade-in bg-stone-900 text-[#f9fada] pb-16 lg:pb-24 ${
      //   isIntersecting ? "appear" : ""
      // }`}

      className="fade-in bg-stone-900 text-[#f9fada] pb-16 lg:pb-24"
    >
      <div className=" w-full max-w-[1440px] mx-auto">
        <div className="border-b border-b-[#f9fada] h-40 sm:h-64 mx-[2rem] lg:mx-[2.2rem] xl:mx-[12.5rem] flex items-end justify-between text-xs sm:text-sm md:text-base lg:text-lg">
          <div className="w-[14rem] h-[8rem] mx-auto lg:w-[50rem] xl:w-[84rem] sm:h-[14rem] grid grid-cols-1 text-center justify-center">
            <div className="flex items-center justify-self-center w-[8rem] sm:w-[10rem] md:w-[12rem] lg:w-[14rem] ">
              <img src={footerLogo} alt="footer logo" />
            </div>
            <div className="flex items-center justify-center gap-4 sm:gap-10">
              <p className="transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
                <a href="#home">Home</a>
              </p>
              <p className="transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
                <a href="#about">About</a>
              </p>
              <p className="text-nowrap transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
                <a href="#services">Our Services</a>
              </p>
            </div>
            <div
              // className="flex items-center justify-center gap-3 sm:gap-5"
              className="grid grid-cols-4 place-items-center mx-[4rem] md:mx-[2rem] lg:mx-[18rem] xl:mx-[22rem]"
            >
              <div className=" transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300 cursor-pointer">
                <a href="https://www.instagram.com/lusiboi_ent_?igsh=emNzaDJsOHM0M2I4">
                  {/* <img src={instagram} alt="instagram" className="w-full" /> */}

                  <SlSocialInstagram size={iconSize} />
                </a>
              </div>

              {/* w-4 h-4 sm:w-8 sm:h-8 */}

              <div className=" transform sm:mb-0 hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300 cursor-pointer">
                {/* <img src={tiktok} alt="tiktok" className="w-full" /> */}
                <a href="https://www.facebook.com/people/Lusiboi-Entertainment/61565626529084/">
                  <SlSocialFacebook
                    size={iconSize}
                    // className="w-[1rem] md:w-[1rem] lg:w-[1.2rem] xl:w-[2rem]"
                  />
                  {/* <BsFacebook size={iconSize} /> */}
                </a>
              </div>
              <div className=" transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300 cursor-pointer">
                {/* <img src={email} alt="email" className="w-full" /> */}
                <a href="#contact">
                  <HiOutlineMail
                    size={iconSize}
                    // className="w-[0.9rem] md:w-[1rem] lg:w-[1.2rem] xl:w-[2rem]"
                  />
                </a>
              </div>
              <div className="transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300 cursor-pointer">
                {/* <img src={twitterX} alt="twitterX" className="w-full" /> */}
                <a href="https://x.com/lusiboi_ent_?s=11&t=bERW0yHoWlIBF1p36nm7Fw">
                  <BsTwitterX
                    size={iconSize}
                    // className="w-[0.8rem] md:w-[1rem] lg:w-[1.2rem] xl:w-[2rem]"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="hidden lg:block sm:pb-10 w-[14rem] text-nowrap">
            <Button type="primary_gold">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
        {/* <div className="w-[12rem] bg-orange-200 md:w-[26rem] lg:w-[28rem] xl:w-[50rem] 2xl:w-[87.5rem] grid grid-cols-1 text-center justify-center mx-auto text-xs sm:text-sm md:text-base lg:text-lg sm:mx-44 mt-4">
        <p className="text-center">c 2024 All Rights Reserved</p>
      </div> */}
        <p className="px-[5rem] mt-2 lg:mt-4 text-center lg:ml-[-10rem] text-xs sm:text-sm md:text-base lg:text-lg">
          © {currentYear} Lusiboi Entertainment. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default FooterDetails;

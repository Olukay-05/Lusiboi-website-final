import { useState, useEffect, useRef } from "react";
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from "@chakra-ui/react";

// import Button from "../reusable-component/Button";
// import instagram from "../assets/instagram.svg";
// import email from "../assets/email.svg";
// import tiktok from "../assets/tiktok.svg";
// import twitterX from "../assets/twitterX.svg";
import footerLogo from "../assets/footerLogo.svg";
// import useIntersectionObserver from "../Hooks/useIntersectionObserver";

import { HiOutlineMail } from "react-icons/hi";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";

import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import PrivacyPolicy from "./PrivacyPolicy";

const currentYear = new Date().getFullYear();

function FooterDetails() {
  const [iconSize, setIconSize] = useState(20);
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  return (
    <div className=" bg-stone-900 text-[#f9fada] pb-16 lg:pb-24">
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
              <p className="text-nowrap transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
                <a onClick={onOpen} className="cursor-pointer">
                  Privacy Policy
                </a>
              </p>
            </div>
            <div
              // className="flex items-center justify-center gap-3 sm:gap-5"
              className="grid grid-cols-4 place-items-center mx-[4rem] md:mx-[2rem] lg:mx-[18rem] xl:mx-[25rem]"
            >
              <div className=" transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300 cursor-pointer">
                <a href="https://www.instagram.com/lusiboi_ent_?igsh=emNzaDJsOHM0M2I4">
                  {/* <img src={instagram} alt="instagram" className="w-full" /> */}

                  <SlSocialInstagram size={iconSize} />
                </a>
              </div>

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
          {/* <Button type="primary_gold">
              <a href="#contact">Contact Us</a>
            </Button> */}
          <div className="hidden lg:block mb-2 whitespace-nowrap"></div>
        </div>
        <p className="flex items-center justify-center mt-2 lg:mt-4 text-xs sm:text-sm md:text-base lg:text-lg">
          © {currentYear} Lusiboi Entertainment. All rights reserved.
        </p>
      </div>

      {/* Modal for Privacy Policy */}
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="scale"
        scrollBehavior="inside"
      >
        <ModalOverlay />

        <ModalContent
          maxWidth={{
            base: "90%", // Mobile screens
            sm: "80%", // Small screens (tablet)
            md: "60%", // Medium screens (laptop)
            lg: "50%", // Large screens (desktop)
          }}
          bg="#fefce8"
          color="#9d6c40"
        >
          <ModalHeader bg="#efdb6a" borderTopRadius="lg">
            Privacy Policy
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            sx={{
              /* Hides the scrollbar but keeps the scroll functionality */
              "&::-webkit-scrollbar": {
                display: "none",
              },
              "-ms-overflow-style": "none" /* IE and Edge */,
              "scrollbar-width": "none" /* Firefox */,
            }}
          >
            <PrivacyPolicy />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default FooterDetails;

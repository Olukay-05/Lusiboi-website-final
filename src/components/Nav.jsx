import { useEffect, useRef, useState } from "react";

import navLogo from "../assets/lusiboi-logo.svg";
import logo from "../assets/lusiboi-lg.png";

import { gsap } from "gsap";

const closeBtn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
    id="closeBtn"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);

const openBtn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

function Nav() {
  const [nav, setNav] = useState(false);
  const navRef = useRef();
  const closeBtnRef = useRef();
  const btnSvgRef = useRef();

  function handleToggle() {
    setNav(!nav);
  }

  useEffect(() => {
    if (nav) {
      gsap.to(navRef.current, {
        x: 0,
        duration: 0.8,
        ease: "power3.inOut",
      });

      gsap.fromTo(
        btnSvgRef.current,
        { rotation: 0, opacity: 0 },
        { rotation: -180, opacity: 1, duration: 1, ease: "power3.inOut" }
      );
    } else {
      // Animation for closing the navbar
      gsap.to(navRef.current, {
        x: "-100%",
        duration: 0.8,
        ease: "power3.inOut",
      });
    }
  }, [nav]);

  // Close the navbar if clicked outside of it
  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        closeBtnRef.current &&
        !closeBtnRef.current.contains(event.target)
      ) {
        setNav(false);
      }
    }

    if (nav) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("touchstart", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [nav]);

  return (
    <nav className="fixed top-0 w-full mx-auto px-4 lg:px-28 z-50 font-semibold flex shadow-sm items-center justify-between py-4 bg-[#efdb6a] ">
      <div className="w-24 md:w-32 lg:w-36">
        <a href="#home">
          <img src={navLogo} alt="logo" className="w-full" />
        </a>
      </div>
      <div>
        <ul className="md:flex items-center text-[#a86a33] justify-between gap-16 hidden xl:text-lg">
          <li className=" border-stone-600">
            <a href="#home" className="cursor-pointer">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="cursor-pointer">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="cursor-pointer">
              Our Services
            </a>
          </li>
          <li>
            <a href="#contact" className="cursor-pointer">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div ref={closeBtnRef} className="block md:hidden" onClick={handleToggle}>
        {nav ? <div ref={btnSvgRef}>{closeBtn}</div> : openBtn}
      </div>

      <div
        ref={navRef}
        className="fixed z-10 left-0 top-0 w-[60%] border-r border-r-stone-500 h-full bg-stone-900 text-stone-200"
        style={{ transform: "translateX(-100%)" }} // Initial hidden state with GSAP
      >
        <ul className="pt-24 uppercase p-4 text-[#f9fad4]">
          <li className="p-4 border-b border-stone-600">
            <a href="#home" className="cursor-pointer" onClick={handleToggle}>
              Home
            </a>
          </li>
          <li className="p-4 border-b border-stone-600" onClick={handleToggle}>
            <a href="#about" className="cursor-pointer">
              About
            </a>
          </li>
          <li className="p-4 border-b border-stone-600">
            <a
              href="#services"
              className="cursor-pointer"
              onClick={handleToggle}
            >
              Our Services
            </a>
          </li>
          <li className="p-4 border-b border-stone-600">
            <a
              href="#contact"
              className="cursor-pointer"
              onClick={handleToggle}
            >
              Contact
            </a>
          </li>
        </ul>

        <div>
          <img src={logo} alt="logo" className="w-10 mx-auto mt-40" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;

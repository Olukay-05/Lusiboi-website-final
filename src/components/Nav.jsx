import { useEffect, useRef, useState } from "react";

import navLogo from "../assets/navLogo.svg";
import logo from "../assets/lusiboi-lg.png";

const closeBtn = (
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

  function handleToggle() {
    event.stopPropagation();
    setNav(!nav);
  }

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
    <nav className="fixed top-0 w-full z-50 flex shadow-lg items-center justify-between py-4  mx-auto bg-stone-200 px-4 sm:px-10 lg:px-[10rem]">
      <div>
        <a href="#home">
          <img src={navLogo} alt="logo" className="w-15 md:w-32 lg:38" />
        </a>
      </div>
      <div>
        <ul className="md:flex items-center justify-between gap-16 hidden">
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
        {nav ? closeBtn : openBtn}
      </div>

      <div
        ref={navRef}
        className={
          nav
            ? "fixed z-10 left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-stone-900 text-stone-200 ease-in-out duration-300"
            : "fixed left-[-100%]"
        }
      >
        <ul className="pt-24 uppercase p-4">
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

import { useEffect, useRef } from "react";

import luciboi from "../assets/lusiboi-lg.png";
import film from "../assets/film.svg";

import { gsap } from "gsap";

import Button from "../reusable-component/Button";
// import Particles from "@tsparticles/react";
// import ParticlesComponent from "./ParticlesComponent";

function Hero() {
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const filmRef = useRef(null);
  const buttonRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({ defaults: { ease: "back", duration: 2 } });

    // power4.inOut

    // Animate h1
    tl.to(h1Ref.current, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      opacity: 1,
      y: 0,
      duration: 2.2,
    });

    tl.to(
      pRef.current,
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        opacity: 1,
        y: 0,
      },
      "-=2"
    ); // Overlap with previous animation by 2 seconds

    tl.to(
      buttonRef.current,
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        opacity: 1,
        y: 0,
      },
      "-=2"
    );
    tl.fromTo(
      logoRef.current,
      { scale: 0, opacity: 0 },
      { opacity: 1, scale: 1, ease: "back" },
      "-=1"
    );
    tl.fromTo(
      filmRef.current,
      { scale: 0 },
      { opacity: 1, scale: 1, ease: "back(2)" },
      "-=1"
    );

    // Cleanup function if necessary
    return () => {
      tl.kill(); // Clean up the timeline when the component unmounts
    };
  }, []);

  return (
    <>
      {/* bg-yellow-50 */}
      {/* bg-[#1c1917] */}
      <section
        id="home"
        className=" relative bg-yellow-50  text-center sm:relative text-stone-800  pt-40 sm:pt-20 pb-20  md:pt-40 md:pb-12 sm:flex sm:items-center sm:justify-around xl:px-0 2xl:px-20 lg:pt-[10rem] lg:pb-[12rem] border border-white lg:gap-[10rem]"
      >
        <div className="border border-white flex items-start justify-between  p-4 flex-col lg:text-center gap-6 lg:gap-10 pb-8 md:px-20 md:text-center xl:gap-12  ">
          <h1
            ref={h1Ref}
            style={{
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
            }}
            className="border text-[#a86a33] border-white opacity-0 transform translate-y-[100px] font-libre-baskerville xl:text-left font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.8rem] xl:max-w-2xl "
          >
            Your Story, Our Expertise
          </h1>
          <p
            ref={pRef}
            style={{
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
            }}
            className=" border border-white text-[#a86a33] opacity-0 lg:leading-relaxed transform translate-y-[100px]  hind-regular text-base lg:text-center sm:text-lg md:text-xl xl:text-left leading-relaxed"
          >
            Your ultimate destination for all things entertainment. From
            groundbreaking films to unforgettable events, Lusiboi Entertainment
            is your partner in turning creativity into impact. Let&apos;s make
            something unforgettable together.
          </p>
          <div
            ref={buttonRef}
            style={{
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
            }}
            className="opacity-0 transform translate-y-[100px] mx-auto xl:mx-0 md:block"
          >
            <a href="#contact">
              <Button type="primary_black"> Get Started</Button>
            </a>
          </div>
        </div>

        <div
          ref={logoRef}
          className="border border-white opacity-0 w-[45rem] xl:w-[50rem]  pl-20 xl:pl-0 xl:pr-20 hidden xl:block"
        >
          <img src={luciboi} alt="image" className=" w-full" />
        </div>

        <div
          ref={filmRef}
          className="opacity-0 absolute z-1 bottom--1 w-[12rem] left-0 sm:bottom-[-1.3rem] md:bottom-[-1.5rem] md:left-[0rem] lg:bottom-[-4rem] lg:left-[0rem] xl:bottom-[-2.5rem] lg:w-[18rem] xl:w-[20rem]"
        >
          <img src={film} alt="film" className="w-full" />
        </div>
        {/* <div className="z-[-1]">
          <ParticlesComponent />
        </div> */}
      </section>
    </>
  );
}

export default Hero;

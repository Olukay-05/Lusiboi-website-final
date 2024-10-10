import { useEffect, useRef } from "react";

import heroImage from "../assets/hero-group-images.png";

import film from "../assets/film.svg";

import { gsap } from "gsap";

import Button from "../reusable-component/Button";

function Hero() {
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const filmRef = useRef(null);
  const buttonRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({ defaults: { ease: "back", duration: 2 } });

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
    <section className="bg-yellow-50 relative h-[100%] flex items-center justify-center">
      <section
        id="home"
        className="w-full max-w-[1350px] mx-auto lg:mx-auto xl:mx-[5rem] relative text-center sm:relative text-stone-800  pt-40 sm:pt-32 pb-20  md:pt-36 md:pb-12 sm:grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 xl:px-0 "
      >
        <div className=" flex items-start justify-between p-4 flex-col sm:items-center md:items-center lg:text-center lg:items-center xl:items-start gap-6 lg:gap-10 pb-8 md:px-20 lg:px-0 md:text-center xl:gap-12">
          <h1
            ref={h1Ref}
            style={{
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
            }}
            className=" text-[#a86a33] border opacity-0 transform translate-y-[100px] font-libre-baskerville lg:text-center xl:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl md:max-w-4xl leading-tight md:leading-tight lg:leading-tight font-semibold xl:max-w-[38rem]"
          >
            Shaping the Future of African Entertainment
          </h1>
          <p
            ref={pRef}
            style={{
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
            }}
            className=" text-[#a86a33] opacity-0 lg:leading-relaxed transform translate-y-[100px]  hind-regular text-base lg:text-center sm:text-lg md:text-xl xl:text-left leading-tight md:max-w-4xl xl:max-w-2xl"
          >
            We&apos;re more than just entertainment. We&apos;re a community
            dedicated to amplifying African voices and shaping the future with
            film production, talent management, and event organization.
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
          className=" opacity-0 w-[100%]  pl-20 xl:pl-0  hidden xl:block justify-self-center self-center xl:justify-start xl:self-start"
        >
          <img src={heroImage} alt="image" className=" w-full" />
        </div>

        {/* <img src={luciboi} alt="image" className=" w-full" /> */}
        {/* <div
          ref={filmRef}
          className="opacity-1 absolute z-1 bottom-[-1.3rem] w-[9rem] md:w-[12rem] left-0 sm:bottom-[-1.3rem] md:bottom-[-1.5rem] md:left-[0rem] lg:bottom-[-2rem] lg:left-[0rem] xl:hidden lg:w-[18rem]"
        >
          <img src={film} alt="film" className="w-full" />
        </div> */}
        {/* <div className="z-[-1]">
          <ParticlesComponent />
        </div> */}
      </section>
      {/* <div
        ref={filmRef}
        className="opacity-0 absolute z-1 hidden xl:block xl:left-0 xl:bottom-[-2.5rem] xl:w-[20rem]"
      >
        <img src={film} alt="film" className="w-full" />
      </div> */}
    </section>
  );
}

export default Hero;

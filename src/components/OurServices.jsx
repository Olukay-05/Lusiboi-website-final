import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ServicesA from "./ServicesA";
import ServicesB from "./ServicesB";
import ServicesC from "./ServicesC";
import ServicesD from "./ServicesD";
import ServicesE from "./ServicesE";

import ImageContainerA from "./ImageContainerA";
import DescriptionA from "./DescriptionA";

import ImageContainerB from "./ImageContainerB";
import DescriptionB from "./DescriptionB";

import ImageContainerC from "./ImageContainerC";
import DescriptionC from "./DescriptionC";

import ImageContainerD from "./ImageContainerD";
import DescriptionD from "./DescriptionD";

function OurServices() {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  const headingRef = useRef(null);
  const servicesRef = useRef([]);

  useEffect(() => {
    // Create a GSAP context to handle cleanup more easily
    const ctx = gsap.context(() => {
      // Timeline for heading animation
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%", // Start when heading is 80% in view
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        ease: "back(4)",
        duration: 1,
      });

      // Timeline for services stagger animation
      gsap.from(servicesRef.current, {
        scrollTrigger: {
          trigger: servicesRef.current[0], // Use the first service as the trigger
          start: "top 60%", // Start when the first service is 80% in view
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        // ease: "power3.out",
        ease: "back(4)",
        stagger: 0.2,
      });
    });

    // Cleanup GSAP context on unmount
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="pt-5 lg:mt-10 lg:pt-[5rem] ">
      <h2
        ref={headingRef}
        className="text-center text-[#f9fada] mt-[8rem] text-2xl font-bold lg:text-3xl xl:text-4xl"
      >
        Our Services
      </h2>
      <article className="grid content-center justify-items-center grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 w-full max-w-[1120px] mx-auto">
        <div ref={(el) => (servicesRef.current[0] = el)}>
          <ServicesA />
        </div>

        <div ref={(el) => (servicesRef.current[1] = el)}>
          <ServicesB />
        </div>
        <div ref={(el) => (servicesRef.current[2] = el)}>
          <ServicesC />
        </div>
        <div ref={(el) => (servicesRef.current[3] = el)}>
          <ServicesD />
        </div>
        <div
          ref={(el) => (servicesRef.current[4] = el)}
          className="col-span-2 xl:col-span-1"
        >
          <ServicesE />
        </div>
      </article>

      <article
        id="movie-production"
        className=" mt-40 lg:mt-[14rem] grid grid-cols-1 gap-14 md:gap-0  md:grid-cols-2 w-full xl:max-w-[1120px] lg:max-w-[896px] md:max-w-[696px]  mx-auto "
      >
        <ImageContainerA />
        <DescriptionA />
      </article>

      <article
        id="music-production"
        className=" mt-40 grid grid-cols-1 gap-14 md:gap-0  md:grid-cols-2 w-full xl:max-w-[1120px] lg:max-w-[896px] md:max-w-[696px] mx-auto"
      >
        <DescriptionB />
        <ImageContainerB />
      </article>

      <article
        id="artist-management"
        className=" mt-40 grid grid-cols-1 gap-14 md:gap-0  md:grid-cols-2 w-full xl:max-w-[1120px] lg:max-w-[896px] md:max-w-[696px] mx-auto"
      >
        <ImageContainerC />
        <DescriptionC />
      </article>

      <article
        id="event-management"
        className=" mt-40 grid grid-cols-1 gap-14 md:gap-0  md:grid-cols-2 w-full xl:max-w-[1120px] lg:max-w-[896px] md:max-w-[696px] mx-auto pb-20"
      >
        <DescriptionD />
        <ImageContainerD />
      </article>
    </section>
  );
}

export default OurServices;

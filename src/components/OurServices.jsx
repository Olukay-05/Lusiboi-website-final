// import { default as Description } from "./Description";
// import { default as ImageContainer } from "./ImageContainer";
// import { default as Services } from "./Services";
// import { default as ServicesInformation } from "./ServicesInformation";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ServicesA from "./ServicesA";
import ServicesB from "./ServicesB";
import ServicesC from "./ServicesC";
import ServicesD from "./ServicesD";
import ServicesE from "./ServicesE";

// import ServicesInformation from "./ServicesInformation";
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
        stagger: 0.2, // Stagger each service by 0.2 seconds
      });
    });

    // Cleanup GSAP context on unmount
    return () => ctx.revert();
  }, []);

  return (
    // transition-opacity duration-1000 opacity-0
    <section id="services" className="pt-5 lg:mt-10  lg:pt-[5rem] ">
      <h2
        ref={headingRef}
        className="text-center text-[#f9fada] mt-[8rem] text-2xl font-bold lg:text-3xl xl:text-4xl"
      >
        Our Services
      </h2>

      <article className="grid content-center justify-items-center grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 sm:mx-12 md:mx-20 lg:mx-40 xl:mx-20 2xl:mx-40">
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
        {/* <ServicesE /> */}
      </article>

      <article
        id="movie-production"
        className="flex flex-col sm:flex-row sm:items-center sm:justify-around mt-40 lg:mt-30 xl:mt-60 lg:mx-20 xl:mx-32 2xl:mx-44"
      >
        <ImageContainerA />
        <DescriptionA />
      </article>

      <article
        id="music-production"
        className="flex flex-col-reverse mt-20 md:mt-0 sm:flex-row sm:items-center sm:justify-around lg:mt-20 lg:mx-20 xl:mx-32 2xl:mx-44"
      >
        <DescriptionB />
        <ImageContainerB />
      </article>

      <article
        id="artist-management"
        className="flex flex-col mt-20 md:mt-0 sm:flex-row sm:items-center sm:justify-around lg:mt-20 lg:mx-20 xl:mx-32 2xl:mx-44"
      >
        <ImageContainerC />
        <DescriptionC />
      </article>

      <article
        id="event-management"
        className="flex flex-col-reverse mt-20 md:mt-0 sm:flex-row sm:items-center sm:justify-around lg:mt-20 lg:mb-[6rem]  xl:mx-32 2xl:mx-44"
      >
        {/* lg:mx-20 xl:mx-32 2xl:mx-44 */}
        <DescriptionD />
        <ImageContainerD />
      </article>
      {/* <ServicesInformation>
        <h1>Details</h1>
        <ImageContainer />
        <Description />
      </ServicesInformation> */}
    </section>
  );
}

export default OurServices;

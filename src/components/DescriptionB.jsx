import React from "react";
import Button from "../reusable-component/Button";
import useAnimateOnScroll from "../Hooks/useAnimateOnScroll";

function DescriptionB() {
  const [articleRef, isVisible] = useAnimateOnScroll(0.2);

  return (
    <article
      ref={articleRef}
      className={`text-stone-200 opacity-0 order-2 md:order-none flex flex-col gap-5 lg:gap-8 items-center md:items-start md:justify-center lg:justify-center px-6 md:px-0 ${
        isVisible
          ? "animate__animated animate__fadeIn animate__delay-1s opacity-5"
          : ""
      }`}
    >
      <h3 className="rainbow text-center md:text-left  text-xl 2xl:px-0 font-bold lg:text-4xl">
        Movie Production
      </h3>
      <p className="text-[#f9fada] lg:text-clamp text-center md:text-left text-base lg:text-lg">
        From script development to post-production, we handle all aspects of
        filmmaking. Our team of experienced professionals ensures that every
        film we produce is of the highest quality.
      </p>
      <div>
        <a href="#contact">
          <Button type="primary_gold">BOOK NOW</Button>
        </a>
      </div>
    </article>
  );
}

export default DescriptionB;

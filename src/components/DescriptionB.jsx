// import Button from "../reusable-component/Button";

// function DescriptionB() {
//   return (
//     <article className="text-stone-200 flex items-center md:items-start py-20 md:py-40 lg:pr-[2rem] xl:py-10 flex-col gap-5 md:gap-10">
//       <h3 className="rainbow text-center lg:px-20 md:px-[1.5rem] text-xl 2xl:px-0 font-bold lg:text-4xl xl:px-10">
//         Music Production
//       </h3>
//       <p className="text-stone-200 lg:text-clamp px-[3rem] md:px-[1.5rem] text-center md:text-left lg:px-20 xl:px-10 2xl:px-0 lg:text-xl">
//         We produce and promote music across all genres, providing opportunities
//         for artists to reach new heights. Our state-of-the-art recording studios
//         and industry connections help artists create and distribute their music.
//       </p>
//       <div className="lg:px-20 xl:px-10 2xl:px-0 md:px-[1.5rem]">
//         <a href="#contact">
//           <Button type="primary_gold">BOOK NOW</Button>
//         </a>
//       </div>
//     </article>
//   );
// }

// export default DescriptionB;

import React from "react";
import Button from "../reusable-component/Button";
import useIntersectionObserver from "../Hooks/useIntersectionObserver";

function DescriptionB() {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0,
    rootMargin: "0px 0px -250px 0px",
  });

  return (
    // <article
    //   ref={ref}
    //   className={`fade-in text-stone-200 flex items-center md:items-start py-20 md:py-40 lg:pr-[2rem] xl:py-10 flex-col gap-5 md:gap-10 ${
    //     isIntersecting ? "appear" : ""
    //   }`}
    // >
    //   <h3 className="rainbow text-center lg:px-20 md:px-[1.5rem] text-xl 2xl:px-0 font-bold lg:text-4xl xl:px-10">
    //     Music Production
    //   </h3>
    //   <p className="text-[#f9fada] lg:text-clamp px-[3rem] md:px-[1.5rem] text-center md:text-left lg:px-20 xl:px-10 2xl:px-0 lg:text-xl">
    //     We produce and promote music across all genres, providing opportunities
    //     for artists to reach new heights. Our state-of-the-art recording studios
    //     and industry connections help artists create and distribute their music.
    //   </p>
    //   <div className="lg:px-20 xl:px-10 2xl:px-0 md:px-[1.5rem]">
    //     <a href="#contact">
    //       <Button type="primary_gold">BOOK NOW</Button>
    //     </a>
    //   </div>
    // </article>

    <article
      ref={ref}
      // className={`fade-in text-stone-200  flex items-center md:items-start py-20 md:py-0 lg:py-40 xl:py-10 flex-col gap-5 ${
      //   isIntersecting ? "appear" : ""
      // }`}

      // flex items-center md:items-start py-20 md:py-0 lg:py-40 xl:py-10 flex-col gap-5
      className={`fade-in text-stone-200 order-2 md:order-none flex flex-col gap-5 lg:gap-8 items-center md:items-start md:justify-center lg:justify-center px-6 md:px-0  ${
        isIntersecting ? "appear" : ""
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

// <article
// ref={ref}
// // className={`fade-in text-stone-200  flex items-center md:items-start py-20 md:py-0 lg:py-40 xl:py-10 flex-col gap-5 ${
// //   isIntersecting ? "appear" : ""
// // }`}

// // flex items-center md:items-start py-20 md:py-0 lg:py-40 xl:py-10 flex-col gap-5
// className={`fade-in text-stone-200  border border-white flex flex-col gap-5 lg:gap-7 items-center md:items-start px-6 md:px-0 md:pr-8 xl:pr-28 ${
//   isIntersecting ? "appear" : ""
// }`}
// >
// <h3 className="rainbow text-center md:text-left  text-xl 2xl:px-0 font-bold lg:text-4xl">
//   Movie Production
// </h3>
// <p className="text-[#f9fada] lg:text-clamp text-lg text-center md:text-left   lg:text-xl">
//   From script development to post-production, we handle all aspects of
//   filmmaking. Our team of experienced professionals ensures that every
//   film we produce is of the highest quality.
// </p>
// <div>
//   <a href="#contact">
//     <Button type="primary_gold">BOOK NOW</Button>
//   </a>
// </div>
// </article>

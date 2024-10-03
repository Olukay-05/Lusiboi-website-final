// import { useRef, useEffect } from "react";
// import { gsap } from "gsap";

// import movieProductionA from "../assets/movie-production-a.svg";
// import movieProductionB from "../assets/movie-production-b.svg";
// // import useIntersectionObserver from "../Hooks/useIntersectionObserver";

// function ImageContainerA() {
//   // const [ref, isIntersecting] = useIntersectionObserver({
//   //   threshold: 0,
//   //   // rootMargin: "0px 0px -350px 0px",
//   // });

//   // Create refs for both images
//   const imageARef = useRef(null);
//   const imageBRef = useRef(null);

//   useEffect(() => {
//     // Create the GSAP timeline
//     const tl = gsap.timeline();

//     // Animate the first image to scale in
//     tl.from(imageARef.current, {
//       scale: 0,
//       opacity: 0,
//       duration: 2, // Duration of the animation
//       ease: "power2.out",
//     }).from(
//       imageBRef.current,
//       {
//         scale: 0,
//         opacity: 0,
//         duration: 3, // Duration of the animation
//         ease: "power2.out",
//       },
//       "+=0.5" // Delay the second image by 0.5 seconds
//     );
//   }, []);

//   return (
//     <article className="place-self-center md:place-self-start">
//       <div className="relative rounded-xl w-[15rem] h-[15rem] sm:w-[16.5rem] sm:h-64 md:w-[18rem] md:h-72 lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] md:rounded-none ">
//         <div
//           ref={imageARef}
//           className=" absolute bottom-0 right-0 z-10 outline outline-2 outline-yellow-200 rounded-[3rem] lg:rounded-[5rem]"
//         >
//           <img
//             src={movieProductionB}
//             alt="image2"
//             className="lg:block max-w-[12rem] sm:max-w-48 md:max-w-56 lg:max-w-72 xl:max-w-[22rem] rounded-[3rem] lg:rounded-[5rem]"
//           />
//         </div>
//         <div
//           ref={imageBRef}
//           className="absolute outline outline-2 outline-yellow-200 rounded-[3rem] lg:rounded-[5rem]"
//         >
//           <img
//             src={movieProductionA}
//             alt="image"
//             className="lg:block max-w-[12rem] sm:max-w-48 md:max-w-56 lg:max-w-72 xl:max-w-[22rem] rounded-[3rem] lg:rounded-[5rem]"
//           />
//         </div>
//       </div>
//     </article>
//   );
// }

// export default ImageContainerA;

// import { useRef, useEffect } from "react";
// import { gsap } from "gsap";

import movieProductionA from "../assets/movie-production-a.svg";
import movieProductionB from "../assets/movie-production-b.svg";

function ImageContainerA() {
  // Create refs for both images
  // const imageARef = useRef(null);
  // const imageBRef = useRef(null);

  // useEffect(() => {
  //   // Ensure refs are assigned to the correct elements before animating
  //   if (imageARef.current && imageBRef.current) {
  //     // Create the GSAP timeline
  //     const tl = gsap.timeline();

  //     // Animate the first image to scale in
  //     tl.from(imageARef.current, {
  //       scale: 0,
  //       opacity: 0,
  //       duration: 1.5, // Duration of the animation for the first image
  //       ease: "power2.out",
  //     }).from(
  //       imageBRef.current,
  //       {
  //         scale: 0,
  //         opacity: 0,
  //         duration: 1.5, // Duration of the animation for the second image
  //         ease: "power2.out",
  //       },
  //       "+=0.5" // Delay the second image by 0.5 seconds
  //     );
  //   }
  // }, []);

  return (
    <article className="place-self-center md:place-self-start">
      <div className="relative rounded-xl w-[15rem] h-[15rem] sm:w-[16.5rem] sm:h-64 md:w-[18rem] md:h-72 lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] md:rounded-none">
        <div
          // ref={imageARef}
          className="absolute bottom-0 right-0 z-10 outline outline-2 outline-yellow-200 rounded-[3rem] lg:rounded-[5rem]"
        >
          <img
            src={movieProductionA}
            alt="image2"
            className="lg:block max-w-[12rem] sm:max-w-48 md:max-w-56 lg:max-w-72 xl:max-w-[22rem] rounded-[3rem] lg:rounded-[5rem]"
          />
        </div>
        <div
          // ref={imageBRef}
          className="absolute outline outline-2 outline-yellow-200 rounded-[3rem] lg:rounded-[5rem]"
        >
          <img
            src={movieProductionB}
            alt="image"
            className="lg:block max-w-[12rem] sm:max-w-48 md:max-w-56 lg:max-w-72 xl:max-w-[22rem] rounded-[3rem] lg:rounded-[5rem]"
          />
        </div>
      </div>
    </article>
  );
}

export default ImageContainerA;

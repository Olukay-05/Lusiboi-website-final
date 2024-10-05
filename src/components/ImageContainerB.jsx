import musicProductionA from "../assets/musicProductionA.svg";
import musicProductionB from "../assets/musicProductionB.svg";
// import useIntersectionObserver from "../Hooks/useIntersectionObserver";

function ImageContainerB() {
  // const [ref, isIntersecting] = useIntersectionObserver({
  //   threshold: 0,
  //   // rootMargin: "0px 0px -350px 0px",
  // });

  return (
    <article className="grid md:place-self-end justify-self-center order-1 md:order-none">
      <div className="relative rounded-xl w-[15rem] h-[15rem] sm:w-[16.5rem] sm:h-64 md:w-[18rem] md:h-72 lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] md:rounded-none">
        <div className="absolute bottom-0 right-0 z-10 border-[3px] border-spacing-0 border-yellow-200 rounded-[3rem] lg:rounded-[6rem]">
          <img
            src={musicProductionB}
            alt="image2"
            className="lg:block w-[100%] max-w-[12rem] sm:max-w-48 md:max-w-56 lg:max-w-72 xl:max-w-[22rem] rounded-[3rem] lg:rounded-[6rem]"
          />
        </div>
        <div className="absolute border-[3px] border-yellow-200 border-spacing-0 rounded-[3rem] lg:rounded-[6rem]">
          <img
            src={musicProductionA}
            alt="image"
            className="lg:block w-[100%] max-w-[12rem] sm:max-w-48 md:max-w-56 lg:max-w-72 xl:max-w-[22rem] rounded-[3rem] lg:rounded-[6rem]"
          />
        </div>
      </div>
    </article>
  );
}

export default ImageContainerB;

// <div className="relative rounded-xl w-[15rem] h-[15rem] sm:w-[16.5rem] sm:h-64 md:w-[18rem] md:h-72 lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] md:rounded-none border border-white">
// <div className="absolute bottom-0 right-0 z-10">
//   <img
//     src={movieProductionB}
//     alt="image2"
//     className="lg:block max-w-[12rem] sm:max-w-48 md:max-w-56 lg:max-w-72 xl:max-w-[22rem] rounded-3xl"
//   />
// </div>
// <div className="absolute">
//   <img
//     src={movieProductionA}
//     alt="image"
//     className="lg:block max-w-[12rem] sm:max-w-48 md:max-w-56 lg:max-w-72 xl:max-w-[22rem] rounded-3xl"
//   />
// </div>
// </div>

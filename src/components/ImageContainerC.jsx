import artistManagementB from "../assets/artistManagementA.svg";
import movieProductionA from "../assets/movie-production-a.svg";
import useAnimateOnScroll from "../Hooks/useAnimateOnScroll";
// import useIntersectionObserver from "../Hooks/useIntersectionObserver";

function ImageContainerC() {
  const [articleRef, isVisible] = useAnimateOnScroll(0.2);

  // const [ref, isIntersecting] = useIntersectionObserver({
  //   threshold: 0,
  //   // rootMargin: "0px 0px -350px 0px",
  // });

  return (
    <article
      ref={articleRef}
      className={`opacity-0 justify-self-center md:place-self-start ${
        isVisible
          ? "animate__animated animate__fadeIn animate__delay-1s opacity-5"
          : ""
      }`}
    >
      <div className="relative rounded-xl w-[15rem] h-[15rem] sm:w-[16.5rem] sm:h-64 md:w-[18rem] md:h-72 lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] md:rounded-none">
        <div className="absolute bottom-0 right-0 z-10 border-[3px] border-spacing-0 border-yellow-200 rounded-[3rem] lg:rounded-[6rem] max-w-[12rem] sm:max-w-48 md:max-w-56 lg:max-w-72 xl:max-w-[22rem]">
          <img
            src={artistManagementB}
            alt="image2"
            className="lg:block w-[100%]  rounded-[3rem] lg:rounded-[6rem]"
          />
        </div>
        <div className="absolute border-[3px] border-spacing-0 border-yellow-200 rounded-[3rem] lg:rounded-[6rem]">
          <img
            src={movieProductionA}
            alt="image"
            className="lg:block max-w-[12rem] w-[100%] sm:max-w-48 md:max-w-56 lg:max-w-72 xl:max-w-[22rem] rounded-[3rem] lg:rounded-[6rem]"
          />
        </div>
      </div>
    </article>
  );
}

export default ImageContainerC;

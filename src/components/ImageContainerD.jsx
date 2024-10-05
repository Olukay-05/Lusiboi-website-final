import eventManagementA from "../assets/eventManagementA.svg";
import eventManagementB from "../assets/eventManagementB.svg";
// import useIntersectionObserver from "../Hooks/useIntersectionObserver";

function ImageContainerD() {
  // const [ref, isIntersecting] = useIntersectionObserver({
  //   threshold: 0,
  //   // rootMargin: "0px 0px -350px 0px",
  // });
  return (
    <article className="grid place-self-center md:place-self-end order-1 md:order-none">
      <div className="relative w-[15rem] h-[15rem] sm:w-[16.5rem] sm:h-64 md:w-[18rem] md:h-72 lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem]">
        <div className="absolute bottom-0 right-0 z-10 p-0 border-[3px] border-spacing-0 border-yellow-200 rounded-[3rem] lg:rounded-[6rem]">
          <img
            src={eventManagementA}
            alt="image2"
            className="lg:block w-[100%] max-w-[12rem] sm:max-w-48 md:max-w-56 lg:max-w-72 xl:max-w-[22rem] rounded-[3rem] lg:rounded-[6rem]"
          />
        </div>
        <div className="absolute p-0 border-spacing-0 border-[3px] border-yellow-200 rounded-[3rem] lg:rounded-[6rem]">
          {/* rounded-[3rem] lg:rounded-[5rem] */}
          <img
            src={eventManagementB}
            alt="image"
            className="lg:block max-w-[12rem] w-[100%]  sm:max-w-48 md:max-w-56 lg:max-w-72 xl:max-w-[22rem] rounded-[3rem] lg:rounded-[6rem]"
          />
        </div>
      </div>
    </article>
  );
}

export default ImageContainerD;

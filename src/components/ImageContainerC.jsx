import artistManagementA from "../assets/artistManagementA.svg";
import artistManagementB from "../assets/artistManagementA.svg";
import useIntersectionObserver from "../Hooks/useIntersectionObserver";

function ImageContainerC() {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0,
    // rootMargin: "0px 0px -350px 0px",
  });
  return (
    <article className="justify-self-center md:place-self-start">
      <div className="relative rounded-xl w-[15rem] h-[15rem] sm:w-[16.5rem] sm:h-64 md:w-[18rem] md:h-72 lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] md:rounded-none">
        <div className="absolute bottom-0 right-0 z-10">
          <img
            src={artistManagementB}
            alt="image2"
            className="lg:block max-w-[12rem] sm:max-w-48 md:max-w-56 lg:max-w-72 xl:max-w-[22rem] rounded-3xl"
          />
        </div>
        <div className="absolute">
          <img
            src={artistManagementA}
            alt="image"
            className="lg:block max-w-[12rem] sm:max-w-48 md:max-w-56 lg:max-w-72 xl:max-w-[22rem] rounded-3xl"
          />
        </div>
      </div>
    </article>
  );
}

export default ImageContainerC;

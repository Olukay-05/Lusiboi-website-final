import useAnimateOnScroll from "../Hooks/useAnimateOnScroll";
import Button from "../reusable-component/Button";

function DescriptionC() {
  const [articleRef, isVisible] = useAnimateOnScroll(0.2);

  return (
    <article
      ref={articleRef}
      className={`text-stone-200 opacity-0 flex flex-col gap-5 lg:gap-7 items-center md:items-start px-6 md:px-0  xl:pr-0 md:justify-center lg:justify-center ${
        isVisible
          ? "animate__animated animate__fadeIn animate__delay-1s opacity-5"
          : ""
      }`}
    >
      <h3 className="rainbow text-center md:text-left  text-xl 2xl:px-0 font-bold lg:text-4xl">
        Artist Management
      </h3>
      <p className="text-[#f9fada] lg:text-clamp text-center md:text-left text-base lg:text-lg">
        We sign and manage music artists, offering them the support and guidance
        to grow their careers. Our management team provides career planning,
        marketing, and promotional support to help artists achieve their goals.
      </p>
      <div>
        <a href="#contact">
          <Button type="primary_gold">BOOK NOW</Button>
        </a>
      </div>
    </article>
  );
}

export default DescriptionC;

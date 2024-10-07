import useAnimateOnScroll from "../Hooks/useAnimateOnScroll";
import Button from "../reusable-component/Button";

function DescriptionD() {
  const [articleRef, isVisible] = useAnimateOnScroll(0.2);
  return (
    <article
      ref={articleRef}
      className={`text-stone-200 opacity-0 flex flex-col gap-5 lg:gap-8 items-center md:items-start md:justify-center lg:justify-center px-6 order-2 md:order-none md:px-0 ${
        isVisible
          ? "animate__animated animate__fadeIn animate__delay-1s opacity-5"
          : ""
      }`}
    >
      <h3 className="rainbow text-center md:text-left  text-xl 2xl:px-0 font-bold lg:text-4xl">
        Event Management
      </h3>
      <p className="text-[#f9fada] lg:text-clamp text-center md:text-left     text-base lg:text-lg font-normal tracking-normal sm:tracking-wide leading-normal sm:leading-relaxed">
        We organize concerts, talent hunts, film premieres, and other events to
        showcase our talent and productions. Our events provide a platform for
        artists to connect with fans and industry professionals.
      </p>
      <div>
        <a href="#contact">
          <Button type="primary_gold">BOOK NOW</Button>
        </a>
      </div>
    </article>
  );
}

export default DescriptionD;

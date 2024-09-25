import Button from "../reusable-component/Button";
import useIntersectionObserver from "../Hooks/useIntersectionObserver";

function DescriptionD() {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0,
    rootMargin: "0px 0px -250px 0px",
  });
  return (
    <article
      ref={ref}
      className={`fade-in text-stone-200   flex flex-col gap-5 lg:gap-8 items-center md:items-start lg:justify-center px-6 order-2 md:order-none md:px-0  ${
        isIntersecting ? "appear" : ""
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

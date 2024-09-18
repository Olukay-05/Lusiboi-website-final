import Button from "../reusable-component/Button";
import useIntersectionObserver from "../Hooks/useIntersectionObserver";

function DescriptionA() {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0,
    rootMargin: "0px 0px -250px 0px",
  });
  return (
    <article
      ref={ref}
      className={`fade-in text-stone-200 flex items-center md:items-start py-20 md:py-40 xl:py-10 flex-col gap-5 md:gap-10 ${
        isIntersecting ? "appear" : ""
      }`}
    >
      <h3 className="rainbow text-center lg:px-20 md:px-[1.5rem] text-xl 2xl:px-0 font-bold lg:text-4xl xl:px-10">
        Movie Production
      </h3>
      <p className="text-[#f9fada] lg:text-clamp px-[3rem] md:px-[1.5rem] text-center md:text-left lg:px-20 xl:px-10 2xl:px-0 lg:text-xl">
        From script development to post-production, we handle all aspects of
        filmmaking. Our team of experienced professionals ensures that every
        film we produce is of the highest quality.
      </p>
      <div className="lg:px-20 xl:px-10 2xl:px-0 md:px-[1.5rem]">
        <a href="#contact">
          <Button type="primary_gold">BOOK NOW</Button>
        </a>
      </div>
    </article>
  );
}

export default DescriptionA;

import Button from "../reusable-component/Button";
// import useIntersectionObserver from "../Hooks/useIntersectionObserver";

function DescriptionC() {
  // const [ref, isIntersecting] = useIntersectionObserver({
  //   threshold: 0,
  //   rootMargin: "0px 0px -250px 0px",
  // });

  return (
    <article
      // ref={ref}
      // className={`fade-in text-stone-200 flex flex-col gap-5 lg:gap-7 items-center md:items-start px-6 md:px-0  xl:pr-0 md:justify-center lg:justify-center ${
      //   isIntersecting ? "appear" : ""
      // }`}

      className="fade-in text-stone-200 flex flex-col gap-5 lg:gap-7 items-center md:items-start px-6 md:px-0  xl:pr-0 md:justify-center lg:justify-center"
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

{
  /* <h3 className="rainbow text-center md:text-left  text-xl 2xl:px-0 font-bold lg:text-4xl">
Movie Production
</h3>
<p className="text-[#f9fada] lg:text-clamp text-lg text-center md:text-left   lg:text-xl">
From script development to post-production, we handle all aspects of
filmmaking. Our team of experienced professionals ensures that every
film we produce is of the highest quality.
</p>
<div>
<a href="#contact">
  <Button type="primary_gold">BOOK NOW</Button>
</a>
</div> */
}

import Button from "../reusable-component/Button";

function DescriptionA() {
  return (
    <article
      // className={`fade-in text-stone-200  flex items-center md:items-start py-20 md:py-0 lg:py-40 xl:py-10 flex-col gap-5 ${
      //   isIntersecting ? "appear" : ""
      // }`}

      // flex items-center md:items-start py-20 md:py-0 lg:py-40 xl:py-10 flex-col gap-5

      // className={`fade-in text-stone-200 border border-white flex flex-col gap-5 lg:gap-7 items-center md:items-start px-6 md:px-0 md:pr-8 xl:pr-0 lg:justify-center ${
      //   isIntersecting ? "appear" : ""
      // }`}

      // fade-in

      className=" text-stone-200  flex flex-col gap-5 lg:gap-7 items-center md:items-start md:justify-center px-6 md:px-0 xl:pr-0 lg:justify-center"
    >
      <h3 className="rainbow text-center md:text-left  text-xl 2xl:px-0 font-bold lg:text-4xl">
        Movie Production
      </h3>
      <p className="text-[#f9fada] lg:text-clamp text-center md:text-left text-base lg:text-lg">
        From script development to post-production, we handle all aspects of
        filmmaking. Our team of experienced professionals ensures that every
        film we produce is of the highest quality.
      </p>
      <div>
        <a href="#contact">
          <Button type="primary_gold">BOOK NOW</Button>
        </a>
      </div>
    </article>
  );
}

export default DescriptionA;

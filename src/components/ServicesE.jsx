import commercial from "../assets/commercial.svg";

function ServicesE() {
  return (
    <div className="hover:scale-110 hover:bg-opacity-50 transition ease-out duration-300 cursor-pointer col-span-2 xl:col-span-1">
      <a
        href="#contact"
        className="grid gap-5 w-[3rem] sm:w-[8rem] lg:w-[10rem] justify-items-center  xl:col-auto sm:flex-col sm:p-10 md:flex sm:items-center sm:gap-10 lg:items-center lg:justify-center mt-20 text-stone-200"
      >
        <img src={commercial} alt="marketing promotion" />
        <h4 className="text-sm sm:text-base md:text-lg lg:text-xl truncate whitespace-nowrap">
          MARKETING PROMOTION
        </h4>
      </a>
    </div>
  );
}

export default ServicesE;

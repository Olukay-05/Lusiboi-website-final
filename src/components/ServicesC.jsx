import micro from "../assets/micro.svg";

function ServicesC() {
  return (
    <div className="hover:scale-105 hover:bg-opacity-50 transition ease-out duration-300 cursor-pointer ">
      <a
        href="#artist-management"
        className="grid gap-5 w-[3rem] sm:w-[8rem] lg:w-[10rem] justify-items-center sm:flex-col   sm:p-10  md:flex sm:items-center sm:gap-10 justify-center mt-20 text-[#f9fada]"
      >
        <img src={micro} alt="artist management" />
        <h4 className="text-sm sm:text-base md:text-lg lg:text-xl truncate whitespace-nowrap">
          ARTIST MANAGEMENT
        </h4>
      </a>
    </div>
  );
}

export default ServicesC;

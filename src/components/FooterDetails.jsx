import Button from "../reusable-component/Button";
// import instagram from "../assets/instagram.svg";
// import email from "../assets/email.svg";
// import tiktok from "../assets/tiktok.svg";
// import twitterX from "../assets/twitterX.svg";
import footerLogo from "../assets/footerLogo.svg";
import useIntersectionObserver from "../Hooks/useIntersectionObserver";

const currentYear = new Date().getFullYear();

function FooterDetails() {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0,
    rootMargin: "0px 0px -250px 0px",
  });
  return (
    <div
      ref={ref}
      className={`fade-in bg-stone-900 text-stone-200 pb-16 lg:pb-24 ${
        isIntersecting ? "appear" : ""
      }`}
    >
      <div className="border-b h-40 sm:h-64 mx-[2rem] lg:mx-[2.2rem] xl:mx-[12.5rem] flex items-end justify-between text-xs sm:text-sm md:text-base lg:text-lg">
        <div className="w-[14rem] h-[8rem] mx-auto lg:w-[50rem] xl:w-[84rem] sm:h-[14rem] grid grid-cols-1 text-center justify-center">
          <div className="flex items-center justify-self-center w-[8rem] sm:w-[10rem] md:w-[12rem] lg:w-[14rem] ">
            <img src={footerLogo} alt="footer logo" />
          </div>
          <div className="flex items-center justify-center gap-4 sm:gap-10">
            <p className="transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
              <a href="#home">Home</a>
            </p>
            <p className="transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
              <a href="#about">About</a>
            </p>
            <p className="text-nowrap transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
              <a href="#services">Our Services</a>
            </p>
          </div>
          {/* <div className="flex items-center justify-center gap-3 sm:gap-5">
            <div className="w-4 h-4 sm:w-8 sm:h-8">
              <img src={instagram} alt="instagram" className="w-full" />
            </div>
            <div className="w-4 h-4 sm:w-8 sm:h-8">
              <img src={email} alt="email" className="w-full" />
            </div>
            <div className="w-4 h-4 sm:w-8 sm:h-8">
              <img src={tiktok} alt="tiktok" className="w-full" />
            </div>
            <div className="w-4 h-4 sm:w-8 sm:h-8">
              <img src={twitterX} alt="twitterX" className="w-full" />
            </div>
          </div> */}
        </div>
        <div className="hidden lg:block sm:pb-10 w-[14rem] text-nowrap">
          <Button type="primary_gold">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>
      {/* <div className="w-[12rem] bg-orange-200 md:w-[26rem] lg:w-[28rem] xl:w-[50rem] 2xl:w-[87.5rem] grid grid-cols-1 text-center justify-center mx-auto text-xs sm:text-sm md:text-base lg:text-lg sm:mx-44 mt-4">
        <p className="text-center">c 2024 All Rights Reserved</p>
      </div> */}
      <p className="px-[5rem] text-center lg:ml-[-10rem] text-xs sm:text-sm md:text-base lg:text-lg">
        © {currentYear} Lusiboi Entertainment. All rights reserved.
      </p>
    </div>
  );
}

export default FooterDetails;

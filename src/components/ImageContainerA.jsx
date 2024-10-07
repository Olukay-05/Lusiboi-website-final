import useAnimateOnScroll from "../Hooks/useAnimateOnScroll";

import movieProductionA from "../assets/movie-production-a.svg";
import movieProductionB from "../assets/movie-production-b.svg";

import "animate.css";

function ImageContainerA() {
  // const articleRef = useRef(null);
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   let article = articleRef.current;
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setIsVisible(true); // Trigger animation
  //           observer.disconnect(); // Stop observing after animation is triggered
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.2, // Trigger when 20% of the component is in view
  //     }
  //   );

  //   if (articleRef.current) {
  //     observer.observe(articleRef.current);
  //   }

  //   return () => {
  //     if (article) {
  //       observer.unobserve(article); // Clean up
  //     }
  //   };
  // }, []);

  const [articleRef, isVisible] = useAnimateOnScroll(0.2);

  return (
    <article
      ref={articleRef}
      className={`opacity-0 place-self-center md:place-self-start ${
        isVisible
          ? "animate__animated animate__fadeIn animate__delay-1s opacity-5"
          : ""
      }`}
    >
      <div className="relative rounded-xl w-[15rem] h-[15rem] sm:w-[16.5rem] sm:h-64 md:w-[18rem] md:h-72 lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] md:rounded-none">
        <div
          // ref={imageARef}
          className="absolute bottom-0 right-0 z-10 border-[3px] border-spacing-0 border-yellow-200 rounded-[3rem] lg:rounded-[6rem]"
        >
          <img
            src={movieProductionA}
            alt="image2"
            className="lg:block w-full max-w-[12rem] sm:max-w-48 md:max-w-56 lg:max-w-72 xl:max-w-[22rem] rounded-[3rem] lg:rounded-[6rem]"
          />
        </div>
        <div
          // ref={imageBRef}
          className="absolute border-[3px] border-spacing-0 border-yellow-200 rounded-[3rem] lg:rounded-[6rem]"
        >
          <img
            src={movieProductionB}
            alt="image"
            className="lg:block w-full max-w-[12rem] sm:max-w-48 md:max-w-56 lg:max-w-72 xl:max-w-[22rem] rounded-[3rem] lg:rounded-[6rem]"
          />
        </div>
      </div>
    </article>
  );
}

export default ImageContainerA;

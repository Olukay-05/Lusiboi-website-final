import { useRef, useEffect, useState } from "react";

// Reusable hook for animating elements on scroll
function useAnimateOnScroll(threshold = 0.2) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger animation
            observer.disconnect(); // Stop observing after animation is triggered
          }
        });
      },
      {
        threshold, // Percentage of element visibility to trigger
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current); // Clean up on component unmount
      }
    };
  }, [threshold]);

  return [elementRef, isVisible];
}

export default useAnimateOnScroll;

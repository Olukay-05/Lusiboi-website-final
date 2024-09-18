import { useRef, useEffect } from "react";

const useArrowKeyNavigation = (fields) => {
  const inputRefs = useRef([]);

  useEffect(() => {
    // Function to handle keydown events
    const handleKeyDown = (e) => {
      const currentIndex = inputRefs.current.findIndex(
        (input) => input === document.activeElement
      );

      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        // Move to the next input
        if (currentIndex + 1 < inputRefs.current.length) {
          inputRefs.current[currentIndex + 1].focus();
        }
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        // Move to the previous input
        if (currentIndex > 0) {
          inputRefs.current[currentIndex - 1].focus();
        }
      }
    };

    // Attach event listener to each input
    inputRefs.current.forEach(
      (input) => input && input.addEventListener("keydown", handleKeyDown)
    );

    return () => {
      // Cleanup event listeners
      inputRefs.current.forEach(
        (input) => input && input.removeEventListener("keydown", handleKeyDown)
      );
    };
  }, [fields]);

  return inputRefs;
};

export default useArrowKeyNavigation;

import { useEffect } from "react";

import { default as AboutUs } from "../components/AboutUs";
import { default as ContactUs } from "../components/ContactUs";
import { default as FooterDetails } from "../components/FooterDetails";
import { default as Hero } from "../components/Hero";
import { default as Nav } from "../components/Nav";
import { default as OurServices } from "../components/OurServices";
import { default as Footer } from "./Footer";
import { default as Header } from "./Header";
import { default as Main } from "./Main";

function AppLayout() {
  // useEffect(() => {
  //   const sections = document.querySelectorAll("section");

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("opacity-100");
  //           entry.target.classList.remove("opacity-0");
  //         } else {
  //           // Reset the opacity when section leaves the viewport
  //           entry.target.classList.add("opacity-0");
  //           entry.target.classList.remove("opacity-100");
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.1, // Trigger when 10% of the section is visible
  //     }
  //   );

  //   sections.forEach((section) => observer.observe(section));

  //   // Cleanup
  //   return () => {
  //     sections.forEach((section) => observer.unobserve(section));
  //   };
  // }, []); // Keep the dependency array empty

  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main>
        <Hero />
        <AboutUs />
        <OurServices />
        <ContactUs />
      </Main>
      <Footer>
        <FooterDetails />
      </Footer>
    </>
  );
}

export default AppLayout;

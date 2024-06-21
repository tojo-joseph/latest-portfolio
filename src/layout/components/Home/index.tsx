import React, { useRef } from "react";
import Navbar from "../Navbar/navbar";
import Hero from "../Hero/hero";
import Projects from "../Projects/projects";
import Testimonials from "../Testimonials/testimonials";
import MiddleSection from "../MiddleSection/middlesection";
import Technologies from "../Technologies/technologies";
import Footer from "../Footer/footer";

function Home() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const technologiesRef = useRef(null);

  const scrollToSection = (sectionRef: any) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        testimonialsRef={testimonialsRef}
        technologiesRef={technologiesRef}
      />
      <Hero />

      <div ref={projectsRef} id="projects">
        <Projects />
      </div>
      <div ref={testimonialsRef} id="testimonials">
        <Testimonials />
      </div>
      <MiddleSection />
      <div ref={technologiesRef} id="technologies">
        <Technologies />
      </div>
      <div ref={aboutRef} id="about">
        <Footer />
      </div>
    </>
  );
}

export default Home;

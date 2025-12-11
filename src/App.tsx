import AboutMe from "./AboutMe.tsx";
import DirectionalFlash from "./DirectionalFlash.tsx";
import Contact from "./Contact.tsx";
import Footer from "./Footer.tsx";
import Home from "./Home.tsx";
import Projects from "./Projects.tsx";

export const App = () => {
  return (
    <>
      <DirectionalFlash />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

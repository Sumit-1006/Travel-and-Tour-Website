import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../Assets/night.jpg";
function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" HeroImg={AboutImg} title="About" btnClass="hide" />
    </>
  );
}

export default About;

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../Assets/night.jpg";
import AboutUs from "../components/AboutUs";
import Footer from '../components/Footer';
function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" HeroImg={AboutImg} title="About" btnClass="hide" />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;

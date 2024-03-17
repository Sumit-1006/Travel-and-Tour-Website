import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../Assets/4.jpg";
import Footer from '../components/Footer';
import Trip from "../components/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        HeroImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;

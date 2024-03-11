import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../Assets/night.jpg";
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
    </>
  );
}

export default Service;
